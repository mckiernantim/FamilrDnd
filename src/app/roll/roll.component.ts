import { RollService } from './../roll.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit{
  result: number;
  constructor(private _rollService: RollService){}


  roll20(){
   this.result =  this._rollService.roll20();
  }


  ngOnInit(){

 }
 

}




