import { swampEvents } from './swamp';
import { riverEvents } from './river';
import { greaterUndeadEvents } from './greater_undead-events';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MonsterService } from './monster.service';
import { Injectable } from '@angular/core';
import { RollService } from './roll.service';
import { undeadEvents } from './undead-events'





@Injectable({
  providedIn: 'root'
})
export class UndeadService {

  constructor(private rollService: RollService, private monsterService: MonsterService, private http: HttpClient) { }
  response: any[];

  undead = undeadEvents
  river = riverEvents;
  swamp = swampEvents
  greaterUndead = greaterUndeadEvents
  rolls: any = {
    monsters: [],
    monsterNumbers: [],
    dice: [],
    monsterName: "",
  }
  resetMonsterData() {
    this.rolls.monsters = [];
    this.rolls.dice = [];
    this.rolls.monsterName = "";
  }
  getRiver() {
    this.resetMonsterData();
    for (let i = 0; i < 3; i++) {
      var dieRoll = this.rollService.roll20()
      console.log(dieRoll)
      if (dieRoll >= 18) {
        var x = this.rollService.roll100();

        this.rolls.dice.push(x + " was rolled on the event table", this.river[x - 1])
        this.rolls.monsterName = this.river[x - 1]['name'];
        if (this.rolls.monsterName) {
          var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
          this.rolls.monsters.push(monsterStats)

        };
      } else
        this.rolls.dice.push(" nothing happened");
    };
    if (this.rolls.monsters) {
      
    }
    else
      console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%")
    // this.rolls.push(this.weatherService.getWeather());
    console.log(this.rolls)
    return this.rolls
  }
  getSwamp() {
    this.resetMonsterData();
    for (let i = 0; i < 3; i++) {
      var dieRoll = this.rollService.roll20()
      console.log(dieRoll)
      if (dieRoll >= 18) {
        var x = this.rollService.roll100();

        this.rolls.dice.push(x + " was rolled on the event table", this.swamp[x - 1])
        this.rolls.monsterName = this.swamp[x - 1]['name'];
        if (this.rolls.monsterName) {
          var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
          this.rolls.monsters.push(monsterStats)

        };
      } else
        this.rolls.dice.push(" nothing happened");
    };
    if (this.rolls.monsters) {
      
    }
    else
      console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%")
    // this.rolls.push(this.weatherService.getWeather());
    return this.rolls
  }
  // getEvents(location){
  //   this.resetMonsterData();
  //   for (let i = 0; i < 3; i++) {
  //     var dieRoll = this.rollService.roll20()
  //     if (dieRoll >= 18) {
  //       var x = this.rollService.roll100();
  //       this.rolls.dice.push(x + " was rolled on the event table", this.undead[x - 1])
  //       this.rolls.monsterName = this[location][x - 1]['name'];

  //       if (this.rolls.monsterName) {
  //         var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
  //         this.rolls.monsters.push(monsterStats)

  //       };
  //     } else
  //      this.rolls.dice.push(" nothing happened");
  //   };
  //   if (this.rolls.monsters) {
  //     
  //   }
  //   else

  //   // this.rolls.push(this.weatherService.getWeather());
  //   return this.rolls
  // }
  getUndead() {
    this.resetMonsterData();
    for (let i = 0; i < 3; i++) {
      var dieRoll = this.rollService.roll20()
      console.log(dieRoll)
      if (dieRoll >= 18) {
        var x = this.rollService.roll100();

        this.rolls.dice.push(x + " was rolled on the event table", this.undead[x - 1])
        this.rolls.monsterName = this.undead[x - 1]['name'];
        if (this.rolls.monsterName) {
          var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
          this.rolls.monsters.push(monsterStats)

        };
      } else
        this.rolls.dice.push(" nothing happened");
    };
    if (this.rolls.monsters) {
      
    }
    else

    // this.rolls.push(this.weatherService.getWeather());
    return this.rolls
  }
  getGreaterUndead() {
    this.resetMonsterData();
    for (let i = 0; i < 3; i++) {
      var dieRoll = this.rollService.roll20()
      console.log(dieRoll)
      if (dieRoll >= 18) {
        var x = this.rollService.roll100();

        this.rolls.dice.push(x + " was rolled on the event table", this.greaterUndead[x - 1])
        this.rolls.monsterName = this.greaterUndead[x - 1]['name'];
        if (this.rolls.monsterName) {
          var monsterStats = this.getCurrentMonster(this.rolls.monsterName);
          this.rolls.monsters.push(monsterStats)

        };
      } else
        this.rolls.dice.push(" nothing happened");
    };
    if (this.rolls.monsters) {
      
    }
    else
      console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%")
    // this.rolls.push(this.weatherService.getWeather());
    return this.rolls
  }
  getCurrentMonster(name) {
   
    let returnedMonsters: any = [];
    let array: any[] = [];
    let response: Subscription = this.http.get('./assets/monsters.json').subscribe(monster => {
      for (let key in monster) {
        array = Object.keys(monster).map(key => monster[key])
      }
      for (let i = 0; i < array.length; i++) {
        if (array[i]['name'] === name) {
          returnedMonsters.push(array[i]);
     
          return returnedMonsters
        }
      }


     
    });




  }

}

