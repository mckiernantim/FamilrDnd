import { RollService } from './../roll.service';
import { Event } from './../event';
import { Observable, empty } from 'rxjs';
import { MonsterService } from './../monster.service';
import { Monster } from './../../assets/monster';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState,  Breakpoints } from '@angular/cdk/layout';
const monsters = require('./../../assets/5e-SRD-Monsters.json');
const spells = require('./../../assets/5e-SRD-Spells.json')



@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  spellSelected: boolean = false;
  allMonsters: string[] = monsters
  allSpells: string[] = spells;
  spellNames: string[] = [];
  monsterNames: string[] = []
  notSearched: boolean = true;
  selected: number;
  monsters: any[] = [];
  addedMonsters: any[] = [];
  currentSpell: any = {};
  currentMonster: any;
  allSubtypes: string[] = [];
  secondaryMonster: any;
  response: any;
  monsterNumber: number = 0;
  arr: any[];
  num: number;

  currentMonsterUrl: string;
  $currentMonster: Observable<any>;
  $monsterData: Observable<any>;
  searchOptions: any = {
    size: "small",
    language: "eng",
    safe: false,
    rights: "cc_publicdomain"
  }
  constructor(private ms: MonsterService, private roll: RollService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.allMonsters.forEach(monster => {
      let name = monster['name'];
      this.monsterNames.push(name)
      let subtype = monster['subtype'];
      if (this.allSubtypes.includes(subtype) == false) {
        this.allSubtypes.push(subtype)
      }

    });
    this.spellNames = this.allSpells.map(spell =>
      spell = spell['name']
    )
    {
      this.breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ]).subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
         console.log("xsmall")
        }
        if (result.breakpoints[Breakpoints.Small]) {
          console.log("small") 
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          console.log("medium")
        }
        if (result.breakpoints[Breakpoints.Large]) {
          console.log("larg")
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          console.log("xlarge")
        }
      })
    }
  }
  //  CODE FOR LEANER API CALL - NOT SUPPORTED CURRENTLY IN HTTPS FORMAT
  // this.ms.getAllMonsters().subscribe( data =>{
  //     data['results'].forEach(monster => {
  //       console.log(monster)
  //       this.monsterNames.push(monster.name)
  //     })
  //   })
  //   this.ms.getAllSpells().subscribe( data =>{
  //     data['results'].forEach(spell => {
  //       console.log(spell)
  //       this.spellNames.push(spell.name)
  //     })
  //  })



  updateMonster(number) {
    this.monsters[this.selected].current_hit_points = number;
  }
  rollInitiative(monsterDex: number) {
    let dexBonus = (monsterDex - 10) / 2;
    console.log(dexBonus)
    return this.roll.roll20() + (Math.trunc(dexBonus))
  }

  //  LOCAL MONSTER AND SPELL ARE FOR GETTING DATA LOCALLY WITH THE HOPES THAT THE API WILL SOON HAVE HTTPS FUNCTIONALITY
  getLocalMonster(name) {
    document.getElementById("beforeSearch").style.display = "none";
    document.getElementById("addAnother").style.display = "block"
    let returnedMonster = ""

    for (let i = 0; i < this.allMonsters.length; i++) {
      if (this.allMonsters[i]['name'] === name) {
        returnedMonster = this.allMonsters[i]['name'];
        return returnedMonster
      }
    }
  }
  getLocalSpell(name) {

  }
  updateCondition(condition) {
    this.monsters[this.selected].conditions.push(condition)

  }
  removeCondition(num, parentNode) {

    //  get the index of the box clicked 
    let monsterBox = (parentNode.parentNode.id);

    monsterBox = monsterBox.charAt(monsterBox.length - 1)
    //  remove the clicked on item from the clicked on box
    this.monsters[monsterBox].conditions.splice(num, 1)


  }
  listMonsters() {
    console.log(this.monsterNames)
  }
  listSpells() {
    console.log(this.currentSpell)
  }
  listSelected() {
    console.log(this.monsters[this.selected - 1])
  }
  processString(str) {
    let newString = str.toLowerCase();
    newString = newString.split("");
    if (newString[0] != true) {

    } else {
      newString.shift()
    }
    newString[0] = newString[0].toUpperCase();
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === " ") {
        newString[i + 1] = newString[i + 1].toUpperCase()
      }
    }
    console.log(newString)
    newString = newString.join("");
    return newString
  }

  checkMonster(name, num?) {
    let input = this.processString(name);
    console.log(name)
    console.log(input)
    // let url = this.processString(name)
    // this.$currentMonster = this.ms.getMonsterUrl(url);
    // this.$currentMonster.subscribe(data => {
    //   this.response = data;
    //   if (this.response.results[0].url && num != 1) {
    //     let url = this.response.results[0].url;
    //     this.$monsterData = this.ms.getCurrentMonster(url);
    //     this.$monsterData.subscribe(data => {
    //       this.currentMonster = data;

    this.currentMonster = this.getLocalMonster(input)
    console.log("!!!!!!!!!!!" + this.currentMonster)
    for (let i = 0; i < this.allMonsters.length; i++) {
      if (this.allMonsters[i]['name'] === this.currentMonster) {
        this.currentMonster = Object.assign({}, this.allMonsters[i]);
        this.currentMonster.initiative = this.rollInitiative(this.currentMonster.dexterity)
        console.log(this.currentMonster)


      }
    }

    console.log(this.currentMonster)
    if (num != 1) {
      for (let i = 0; i < this.monsterNumber; i++) {
        console.log(this.currentMonster)
        let newMonster = Object.assign({}, this.currentMonster);
        newMonster.current_hit_points = newMonster.hit_points;
        newMonster.conditions = [];
        newMonster.notes = [];

        newMonster.name = this.currentMonster.name + " " + `${i + 1}`
        console.log(newMonster);
        console.log(this.monsters)
        this.monsters.push(newMonster)
      }

    }
    //  else this.secondaryMonster =this.getLocalMonster(name) ;
    //     for (let i = 0; i < 1; i++) {
    //       let newMonster = Object.assign({},this.secondaryMonster);
    //       newMonster.current_hit_points = newMonster.hit_points;
    //       newMonster.conditions = [];
    //       newMonster.notes="";
    //       newMonster.name = this.secondaryMonster.name + " " + `${i + 1}`
    //       this.monsters.push(newMonster)
    //       console.log(this.monsters)
    //     }
  }
  addMonsterCard() {
    this.addedMonsters.length++

  }
  getSpell(spell) {
    this.currentSpell = spell;
    console.log(spell)
    for (let i = 0; i < this.allSpells.length; i++) {
      if (this.allSpells[i]['name'] === spell) {
        this.currentSpell = Object.assign({}, this.allSpells[i])
        this.spellSelected = true;
      }
    }
    // this.ms.getSpellUrl(spell).subscribe(data =>{
    //   console.log(data)
    //   this.ms.getCurrentSpell(data.results[0].url).subscribe(data =>{
    //     console.log(data)
    //     this.currentSpell = data
    //     this.spellSelected =true;
    //   })
    // })
    console.log(this.currentSpell)

  }
  seeMonsters() {
    console.log(this.monsters + "<-------- this.monsters")
    console.log(this.addedMonsters)
  }
  closeMonsterBox(event) {
    // Get the id of the button being pushed then remove from Monsters
    let monsterId = (parseInt(event.target.parentNode.parentNode.parentNode.id.replace("box", "")))
    console.log(monsterId)
    this.monsters.splice(monsterId - 1, 1);
    console.log(this.monsters + " monster array")

  }
  selectMonsterBox(event) {
    // zero out our selected box styles

    let selected = Array.from(document.getElementsByClassName("selected"));
    selected.forEach(element => element.classList.remove("selected"))
    let titles = Array.from(document.getElementsByClassName("selected-title"))
    titles.forEach(element => element.classList.remove("selected-title"))
    // add a new css class

    if (event.target.className.includes("monster-picture") === true) {

      event.target.parentNode.classList.add("selected")
      event.target.parentNode.childNodes[14].classList.add("selected-title")
      event.target.classList.add("selected")
      //  get the index of the selected number to pass on later
      this.selected = parseInt(event.target.parentNode.id.replace("box", "")) - 1

    }
  }

}