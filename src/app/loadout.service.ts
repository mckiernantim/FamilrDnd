import { Injectable } from '@angular/core';
import { RollService} from "./roll.service"
import { d4Pistol, d4Shotgun, d4SMG, d4Rifle  } from  "./weapons"
@Injectable({
  providedIn: 'root'
})




export class LoadoutService {
  descriptions: string[]= [
    "This weapon has been slapped together with adhessive tape and some very ugly welds.  You get the feeling it'l work but dont expect it to win any beauty contests",
    "Beneath the scuff marks, rust, and coroded parts is a sturdy weapon with good bones.",
    "This hodgeopdge of pipes, spare parts, and household junk would be something to marvel it if it wasn't liable to explode in your hands.",
    "This busted old hunk of a iron looks like its somehow survived all three world wars, a trash compactor, and a solid decade of being buried under a scrap heap before making its way to you",
    "You're pretty confident this entire weapon aside from the receiver has been repurposed in home-made neo-plas replacement parts.",
    "This weapon was almost certainly a complete firearm at one point.",
    "This piece bears the scars of many battles but feels heavy in your hand.  Reliably so.",
    "This piece looks like it lost a fight but the action is surprisingly smooth.",
    "This piece definitely had some custom mods at one point but whoever stripped them figured the  weapon wasn't worth keeping.",
    "The serial numbers on theis piece seem to have been violently scarred away with either acid or cryo scoring.  Its dented and rough but inspires a sinister sense of reliability.",
    "Its hard to tell where the rust ends and the wepon begins with this one.",
    "This weapon is cobbled together from what looks like a table leg, steel pipe, and a screwdriver for a stock.",
    "Looking at this weapon, you're pretty certain at last the frame was at one point a shovel",
    "This weapaon looks as if someone stole it from an assembly line before fabrication was complete.  The cloth wrapped handle makes it look a little more legit.",
    "This weapaons appears to at one point have been literally cut in half.  Welding down the middle is suprisingly clean however.",
    "You're pretty certain this weapon was machined entirely from one very heavy peice of neo-plas.",
    "Staring it this weapon you can't help but think that if it got wet it would fall apart.",
    "This piece looks as though it was made from a cast of a proper weapon.  It seems sturdy enough to get the job done.",
    "This weapaon is oviously home-made to those who know what to look for.  Semms pretty damn solid for DIY a job",
    "This piece looks as if its maker attempted a superior weapon by combining the accuracy of a rifle with the freedom of movement granted by a sidearm.  The result is less carbine but more 'Rifle-Pistol' and is a thing to behold, indeed."
  ]
  gun_preixes: string[] = [
    "Janky",
    "DIY",
    "Low-quality",
    "Damaged",
    "Homemade",
    "Junker"
  ]
 
constructor(private roll:RollService) { }
  getLoadout(){
    let roll = this.roll.roll10()
    let weapon;
    roll  < 6 ? 
        weapon = new d4Pistol():
      roll > 6 && roll < 9 ?
        weapon = new d4Shotgun():
      roll == 9 ?
        weapon = new d4SMG():
        weapon = new d4Rifle();
    
      weapon.description = this.descriptions[this.roll.roll20()]
      weapon.type = `${this.gun_preixes[this.roll.roll6()]} ${weapon.type}`
      
      return weapon
    }
    
}

