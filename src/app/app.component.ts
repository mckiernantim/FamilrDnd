
import { Component,} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'familr';
  
  private apiUrl = './assets/monsters.json';
  data: any = {};
  

  constructor(){
    
   
  }
}

