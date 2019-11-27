import { Event } from './../event';
import { Observable, empty } from 'rxjs';
import { MonsterService } from './../monster.service';
import { Monster } from './../../assets/monster';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  
  selected: number;
  monsters: any[] = []
  addedMonsters: any[] = []
  currentMonster: any;
  secondaryMonster: any;
  response: any;
  monsterNumber: number = 0;
  arr: any[];
  num: number;
  currentMonsterUrl: string;
  $currentMonster: Observable<any>;
  $monsterData: Observable<any>;
  constructor(private ms: MonsterService) { }

  ngOnInit() {

  }

  updateMonster(number){
    this.monsters[this.selected].current_hit_points = number;
 }
 updateCondition(condition){
  this.monsters[this.selected].conditions.push(condition)
  console.log(this.monsters[this.selected].conditions)
 }
 removeCondition(num){
   this.monsters[this.selected].conditions.splice(num, 1)


 }
  listMonsters() {
    console.log(this.monsters)
  }
  listSelected() {
    console.log(this.monsters[this.selected - 1])
  }
  processString(str){
    let newString = str.toLowerCase();
    newString = newString.split("");
    if(newString[0]!=true){
      console.log("both are letters")
    } else{
      newString.shift()
    }
    newString[0] = newString[0].toUpperCase();
    for ( let i=0; i<newString.length; i++){
      
      console.log("in loop" + newString[i])
      if(newString[i]===" "){

        console.log(newString[i+1])
        newString[i+1] = newString[i+1].toUpperCase()
      
        
      }
      
    }
    console.log(newString)
    newString = newString.join("");
    return newString


  }
  checkMonster(name, num?) {
    let url = this.processString(name)
    this.$currentMonster = this.ms.getMonsterUrl(url);
    this.$currentMonster.subscribe(data => {
      this.response = data;
      if (this.response.results[0].url && num != 1) {
        let url = this.response.results[0].url;
        this.$monsterData = this.ms.getCurrentMonster(url);
        this.$monsterData.subscribe(data => {
          this.currentMonster = data;
          for (let i = 0; i < this.monsterNumber; i++) {
            let newMonster = Object.assign({},this.currentMonster);
            newMonster.current_hit_points = newMonster.hit_points;
            newMonster.conditions = [];
            newMonster.name = this.currentMonster.name + " " + `${i + 1}`
            this.monsters.push(newMonster)
          }
          
        })
      } else if (this.response.results[0].url) {
        console.log("second statement")
        let url = this.response.results[0].url;
        this.$monsterData = this.ms.getCurrentMonster(url);
        this.$monsterData.subscribe(data => {
          this.secondaryMonster = data;
          for (let i = 0; i < 1; i++) {
            let newMonster = Object.assign({},this.secondaryMonster);
            newMonster.current_hit_points = newMonster.hit_points;
            newMonster.conditions = [];
            newMonster.name = this.secondaryMonster.name + " " + `${i + 1}`
            this.monsters.push(newMonster)
            console.log(this.monsters)
          }
          
         })
      }
    })
  }
  addMonsterCard() {
    this.addedMonsters.length++

  }
  seeMonsters() {
    console.log(this.monsters + "<-------- this.monsters")
    console.log(this.addedMonsters)
  }
  closeMonsterBox(event) {
    // Get the id of the button being pushed then remove from Monsters
    let monsterId = (parseInt(event.target.parentNode.parentNode.parentNode.id.replace("box", "")))
    console.log(monsterId)
    this.monsters.splice(monsterId, 1);
    console.log(this.monsters + " monster array")

  }
  selectMonsterBox(event) {
    // zero out our selected box styles

    let selected = Array.from(document.getElementsByClassName("selected"));
    selected.forEach(element => element.classList.remove("selected"))
    let titles = Array.from(document.getElementsByClassName("selected-title"))
    titles.forEach(element => element.classList.remove("selected-title"))
    // add a new css class
    if (event.target.className === "monster-picture") {
      
      event.target.parentNode.classList.add("selected")
      event.target.parentNode.childNodes[1].classList.add("selected-title")
      event.target.classList.add("selected")
      //  get the index of the selected number to pass on later
      this.selected = parseInt(event.target.parentNode.id.replace("box", "")) - 1
    
    }
  }
 
}

