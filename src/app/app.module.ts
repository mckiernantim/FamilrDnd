import { AppRoutingModule } from './navbar/appRoutingModule';
import { RollService } from './roll.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RollComponent } from './roll/roll.component';
import { DayComponent } from './day/day.component';
import { EventComponent } from './event/event.component';
import { BeachService } from './beach.service';
import { MonsterComponent } from './monster/monster.component';
import { CreatureComponent } from './creature/creature.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {MatGridListModule, MatMenuModule} from '@angular/material'
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component'
import {RouterModule} from "@angular/router";
import { CombsatComponent } from './combsat/combsat.component';
import { CombatComponent } from './combat/combat.component'
import { Ng2CompleterModule} from 'ng2-completer'
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerminusComponent } from './terminus/terminus.component';
import { BlockComponent } from './block/block.component';
import { GoodsComponent } from './goods/goods.component';
import { NpcComponent } from './npc/npc.component';
import { NewsComponent } from './news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    RollComponent,
    DayComponent,
    EventComponent,
    MonsterComponent,
    CreatureComponent,
    WeatherComponent,
    NavbarComponent,
    CombsatComponent,
    CombatComponent,
    TerminusComponent,
    BlockComponent,
    GoodsComponent,
    NpcComponent,
    NewsComponent,

    

    
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    ScrollDispatchModule,
    MatCardModule,
    AppRoutingModule,
    MatMenuModule,
    Ng2CompleterModule,
    LayoutModule,
 
    
    

    
  ],
  providers: [RollService],
  bootstrap: [AppComponent]
})

export class AppModule { }
