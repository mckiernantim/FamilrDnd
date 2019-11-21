import { Event } from './event';
import { weatherEvents } from './weather/weatherEvents';
import { RollService, } from './roll.service';


import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  result: any[] = [];
  constructor(private rollService: RollService) { }
  getWeather(){
    this.result =  []
    for(let i=0; i<3;i++){
   this.result.push (weatherEvents[this.rollService.roll20()]);
  console.log(this.result)
console.log("added weather")}
  

    return this.result;
  }
}
