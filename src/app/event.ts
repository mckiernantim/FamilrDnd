import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class Event{
    
    id:number;
    title:string;
    text:string;
    monsters:boolean;
    name:string;
    rolls:number;   
    die:number;
    extra:number; 
        

    
}