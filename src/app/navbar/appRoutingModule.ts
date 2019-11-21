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
    component: DayComponent
  },
  {
    path:"JungleCrawl",
    component:DayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }