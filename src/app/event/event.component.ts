import { Event } from './../event';

import { DayComponent } from './../day/day.component';
import { RollComponent } from './../roll/roll.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
    event: Event
    constructor(private _event: Event) { }

    ngOnInit(){

    }

}




