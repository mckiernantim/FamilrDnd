import { WeatherService } from './../weather.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  rollResults:any;
  getWeather(){
    this.rollResults = this.weatherService.getWeather()
  }

  
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

}
