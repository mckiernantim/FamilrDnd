import { NewsComponent } from './../news/news.component';
import { TerminusComponent } from './../terminus/terminus.component';
import { DayComponent } from './../day/day.component';
import { CombatComponent } from './../combat/combat.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






const routes: Routes = [
  {
    path: "combat",
    component: CombatComponent

  },
  {
    path: "",
    component: CombatComponent
  },
  {
    path:"JungleCrawl",
    component:DayComponent
  },

  {
    path:"terminus",
    component:TerminusComponent
  },
  {
    path:"news",
    component:NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }