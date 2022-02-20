
import { Item, Weapon } from "./items"


export class d4Pistol extends Weapon {
    damage='1d4';
    damage_type="ballistic";
    range="15/50/150";
    malfunction=1;
    ammunition=9
    type="pistol"
}
export class d4Shotgun extends Weapon {
    damage = '3d4';
    damage_type= "ballisticc";
    range='15/40/80'
    str=12;
    ammunition=2
    malfunction=1
    type="shotgun"
    
}
export class d4SMG extends Weapon {
    damage='1d4';
    range="15/50/100"
    burst="2d4";
    str=12;
    malfunction=1
    to_hit=-1
    type="SMG"
}
export class d4Rifle extends Weapon {
    damage="1d4+1";
    range="15/100/200";
    ammunition=5;
    str=10;
    malfunction=1;
    to_hit=1
    type= "rifle"
}


