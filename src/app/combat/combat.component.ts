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
  selected:number;
  monsters:any[] = []
  addedMonsters:any[] =[]
  currentMonster: any;
  secondaryMonster: any;
  response:any;
  monsterNumber:number = 0;
  arr:any[];
  num:number;
  currentMonsterUrl: string;
  $currentMonster:Observable<any>;
  $monsterData:Observable<any>;
  constructor( private ms:MonsterService) { }

  ngOnInit() {
   
  }
  listMonsters(){
    console.log(this.monsters)
  }
  listSelected(){
    console.log(this.monsters[this.selected-1])
  }
checkMonster(name, num?){
  console.log("!!!!!!!!!!!!!!")
this.$currentMonster = this.ms.getMonsterUrl(name);
this.$currentMonster.subscribe(data=>{
  this.response=data
  if(this.response.results[0].url && num !=1){
   
    let url = this.response.results[0].url;
   
   this.$monsterData = this.ms.getCurrentMonster(url);

   this.$monsterData.subscribe(data =>{
     this.currentMonster=data;
    
     for (let i = 0 ; i<this.monsterNumber; i++){
     
       let originalName = this.currentMonster.name;
       console.log(this.currentMonster.name)
     
       this.monsters.push(this.currentMonster)
       let newName = this.monsters[i]['name'] = this.currentMonster.name +" " + `${i+1}`
       this.monsters[i].name = newName
      
       console.log(this.monsters)
      
     }
     this.monsters.length = this.monsterNumber
   
   })
  }else if( this.response.results[0].url) {
    let url = this.response.results[0].url;
    this.$monsterData = this.ms.getCurrentMonster(url);
    this.$monsterData.subscribe(data =>{
      this.secondaryMonster=data;
      console.log(this.secondaryMonster)
      for (let i = 0 ; i<1; i++){
        if(this.addedMonsters[i]==null){
          this.addedMonsters.splice(i)
        }
        this.addedMonsters.push(this.secondaryMonster)
      }
      this.monsters.length = this.monsterNumber
      console.log(this.monsters.length)
      console.log(this.monsterNumber)
    })
  }
})
}
addMonsterCard(){
 this.addedMonsters.length++

}
seeMonsters(){
  console.log(this.monsters + "<-------- this.monsters")
  console.log(this.addedMonsters)
}
closeMonsterBox(event){
 // Get the id of the button being pushed then remove from Monsters
 let monsterId = (parseInt(event.target.parentNode.parentNode.parentNode.id.replace("box","")))
 console.log(monsterId)
 this.monsters.splice(monsterId, 1);
 console.log(this.monsters + " monster array")
 
}
selectMonsterBox(event){
  let selected = Array.from(document.getElementsByClassName("selected"));
  selected.forEach(element => element.classList.remove("selected"))
  if(event.target.className === "monster-picture"){
   console.log(event.target.parentNode)
   event.target.parentNode.classList.add("selected")
   this.selected = parseInt(event.target.parentNode.id.replace("box", ""))-1
   console.log(this.selected)
  }}
} 

