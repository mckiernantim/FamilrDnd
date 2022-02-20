export class Item {
    name: string;
    description:string;
    consumable?:boolean;
    malfunction:number;
    powered?:boolean;
    power?:string;
  
    getInfo(){
      return this
    }
  }
  export class Weapon extends Item{
    range:string;
    damage:string;
    burst?:string;
    damage_type:string;
    to_hit?:number;
    str?:number;
    ammunition?:number;
    properties?:string;
    mods?:string[]
    weight?:number;
    getDamage(){
        return (this.damage, this.to_hit, this.damage_type)
    }
  
  
  }
export class Armor extends Item {
    ac:number;
    ap:string;
    absorbtion?:number;
    resistance?:string;
    vulnerabilities?:string;
    cm?:number;
    mods:string[]
    wieght:number;
    str:number;
  
    
  }
  export class Chem extends Item{
    uses:number;
    effects:string;
    delivery:string;
    damage?:string
    healing?:string;
    dc?:number;
    duration:string;
  
    
  }
  
  export class Loadout {
    weapons?:Item[];
    armor?:Item[];
    chems?:Item[];
    itmes?:Item[]; 
  }
  
  export class Component extends Item {
    effect:string;
    location:string;
    duration?:string;
    range?:number;
    charges?:string;
    dc:number;
  
    getDc(){
      return this.dc
    }
    getEffect(){
      let result = []
      this.duration ?  
        result.push(this.effect, this.duration) :
        result.push(this.effect);
      return result
    }
  }
  