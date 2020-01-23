import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';




interface monsterData  {
  obj: Object
}
@Injectable({
  providedIn: 'root'
})

export class MonsterService {
  response:any;
  constructor(public http: HttpClient) { }
  getAllMonsters(){
    return this.http.get<monsterData>("http://dnd5eapi.co/api/monsters")
  }
  getAllSpells(){
    return this.http.get<any>("http://dnd5eapi.co/api/spells")
  }
  getSpellUrl(spell){
    return this.http.get<any>("http://dnd5eapi.co/api/spells/?name="+spell)
}
getCurrentSpell(url){
  return this.http.get<any>(url)
}

  getMonsterUrl(monster){
   return this.http.get<monsterData>('http://dnd5eapi.co/api/monsters/?name='+monster)
    // .subscribe(data =>{
    //   this.response = data;
     
    //   if(this.response.results[0].url){
    //    this.getCurrentMonster(this.response.results[0].url).subscribe(data =>{
    //      console.log(data)
    //    }
    //   )

       
    //   }
    // })
    };
    getCurrentMonster(monsterUrl){
     return  this.http.get<monsterData>(monsterUrl)
     
    }
    mapMonsterStats(data){
      
    }
   
  }
