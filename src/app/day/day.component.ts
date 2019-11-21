import { UndeadService } from './../undead.service';
import { NoUndeadService } from './../no-undead.service';
import { HttpClient } from '@angular/common/http';
import { MonsterService } from './../monster.service';
import { MonsterComponent } from './../monster/monster.component';
import { weatherEvents } from './../weather/weatherEvents';
import { WeatherService } from './../weather.service';
import { WeatherComponent } from './../weather/weather.component';
import { BeachService } from './../beach.service';
import { RollService } from './../roll.service';
import { EventComponent } from './../event/event.component';
import { RollComponent } from './../roll/roll.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {MatCardModule} from '@angular/material/card'

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
 }







@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 2, rows: 1 ,border: '3px double purple'},
    {text: 'Tile 2', cols: 2, rows: 1 ,border: '3px double red'},
    {text: 'Tile 3', cols: 2, rows: 1 ,border: '3px double skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 ,border: '3px double yellow'},
    ];
  response: any;
  rollResults: any = [];
  nameResults: any[] = [];
  dayTracker: number = 0;
  weather: any[] = [];
  monsterUrl: any = null;
  dailyFood: number = 13;
  dailyWater: number = 16;
  otherItems: any[];
  npcs: any[];
  monsters: any[];
  monsters$: any;
  partyFood: number = 0;
  dieScope = 10;
  lastRoll:number;
  
 
  partyWater: number = 0;
  partySpace:number= 150
  weatherLabelArr: string[] =[
    "Morning", "Midday", "Evening"
  ]  
  returned: Subscription




  ngOnInit() {

    
    let array: any[] = [];
    let result;
    this.returned =
      this.http.get('./assets/monsters.json').subscribe(monster => {
        for (let key in monster) {
          array = Object.keys(monster).map(key => monster[key])
        }
        for (let i = 0; i < array.length; i++) {
          if (array[i]['name'] === name) {
            result = array[i];
       
            return result
          }
        }


     
      });

  }


  constructor(private _beachService: BeachService,
    private undeadService: UndeadService,
    private weatherService: WeatherService,
    private monsterService: MonsterService,
    private noUndeadService: NoUndeadService,
    private http: HttpClient,
    private rs:RollService) { };


  rollDice(number, dice){
    this.lastRoll = this.rs.roll(number, dice)
}
  getWeather() {
    this.weather = this.weatherService.getWeather();
    console.log(this.weather)


  }
  getBeach() {
    this.refreshDay();

    var returnedResults = (this._beachService.getBeach())
    this.nameResults = returnedResults.monsterNames;
    this.rollResults = returnedResults.dice;
   

  }
  
  refreshDay() {
    this.dayTracker++
    this.rollResults = [];
    this.nameResults = [];
    this.weather = [];
    this.weather = this.weatherService.getWeather();
    this.partyFood = this.partyFood- this.dailyFood;
    this.partyWater = this.partyWater-this.dailyWater;



  }

  getNoUndead() {
    this.refreshDay();
    var returnedResults = (this.noUndeadService.getNoUndead())
    this.nameResults = returnedResults.monsterNames;
    this.rollResults = returnedResults.dice;
}
  getUndead() {
    this.refreshDay();
    var returnedResults = this.undeadService.getUndead()
    
    this.nameResults.push(returnedResults.monsterName);
   
    this.rollResults = returnedResults.dice;
}
getGreaterUndead() {
  this.refreshDay();

  var returnedResults = this.undeadService.getGreaterUndead()
  this.nameResults.push(returnedResults.monsterName);
  console.log(returnedResults)
  console.log(this.nameResults)
  this.rollResults = returnedResults.dice;
  console.log(this.rollResults)
}
getRiver(){
  this.refreshDay();
  var returnedResults = this.undeadService.getRiver()

  this.nameResults.push(returnedResults.monsterName);

  this.rollResults = returnedResults.dice;
  console.log(this.rollResults)
  console.log("^^^^^^^^^^^^^^^^^^")
}
getSwamp(){
  this.refreshDay();
  var returnedResults = this.undeadService.getSwamp()
  this.nameResults.push(returnedResults.monsterName);
  console.log(returnedResults)
  console.log(this.nameResults)
  this.rollResults = returnedResults.dice;
  console.log(this.rollResults)
}
}


