import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { beachEvents } from './beach-events';
import { RollService } from './roll.service';
import { Injectable } from '@angular/core';
import { MonsterService } from './monster.service';

interface monsterData  {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})


export class BeachService {

  constructor(private _rollService: RollService, private weatherService: WeatherService, private monsterService: MonsterService, private http: HttpClient ) { }
  response:any;
  beach = beachEvents
  rolls:any= {
    monsters:[],
    monsterNumbers:[],
    dice:[],
}

  
  getBeach(){
    this.rolls.monsters = [];
    this.rolls.dice = [];
    this.rolls.monsterName = "";
   
    
    for (let i = 0; i<3; i++){
        
        var dieRoll=this._rollService.roll20()
        
       if( dieRoll >= 16){
         var x = this._rollService.roll100();
         this.rolls.dice.push(x +" was rolled on the event table",this.beach[x-1])
         this.rolls.monsterName =this.beach[x-1].name;
    
         if(this.rolls.monsterName){
           
          
            var  currentMonsterUrl = this.monsterService.getMonsterUrl(this.rolls.monsterName);
            console.log(currentMonsterUrl + "PLACE WHERE API WILL BE CALLED")
            var monsterStats = this.getCurrentMonster();
            console.log(monsterStats + "DATA BROUGHT BACK FROM API")
            this.rolls.monsters.push(monsterStats)
            console.log(this.response)
        };
       }else 
       
        this.rolls.dice.push("nothing happened");
    };

    if(this.rolls.monsters){
      console.log(this.rolls.monsters + "MONSTER STATS$$$$$$$$$$$")
  }
    else 
      console.log("NO STATS TO SHOW %%%%%%%%%%%%%%%%%%%")
    // this.rolls.push(this.weatherService.getWeather());
    return this.rolls 
  };

  getCurrentMonster(){
 
  }
  
}
