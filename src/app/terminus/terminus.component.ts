import { MonsterService } from "./../monster.service";
import { HttpClient, HttpHeaders,  } from "@angular/common/http";
import { RollService } from "./../roll.service";
import { LoadoutService } from "../loadout.service";
import { Component, OnInit } from "@angular/core";
import { take } from 'rxjs/operators'
import { pipe } from 'rxjs'
import * as faker from "faker";

// const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'} )



@Component({
  selector: "app-terminus",
  templateUrl: "./terminus.component.html",
  styleUrls: ["./terminus.component.css"],
})
export class TerminusComponent implements OnInit {
  npc: any;
  goods: any;
  streetInfo: any;
  card: any;
  hoods: string[] = [];
  streetsX: string[] = [];
  streetsY: string[] = [];
  wussMobs: string[] = [
    "guard",
    "bandit",
    "noble",
    "cultist",
    "tribal-warrior",
    "kobold",
  ];
  easyMobs: string[] = [
    "grimlock",
    "goblin",
    "acolyte",
    "drow",
    "zombie",
    "drow",
  ];
  mediumMobs: string[] = [
    "orc",
    "deep-gnome-svirfneblin",
    "gnoll",
    "thug",
    "lizardfolk",
    "ape",
  ];
  hardMobs: string[] = [
    "bugbear",
    "duergar",
    "ghoul",
    "spy",
    "animated-armor",
    "dryad",
  ];
  races: string[] = [
    "human",
    "human",
    "dwarven",
    "dwarven",
    "halfling",
    "halfling",
    "human",
    "halfling",
    "tiefling",
    "gnome",
  ];
  statBlocks: any[] = [];
  idImageUrl: string;
  dataReady: boolean;
  statsReady: boolean;
  maleFaceUrl: string = "https://cors-anywhere.herokuapp.com/http://fakeface.rest/face/json?gender=male";
  femaleFaceUrl: string = "https://cors-anywhere.herokuapp.com/http://fakeface.rest/face/json?gender=female";
  headers: HttpHeaders;

  constructor(
    private rolls: RollService,
    private http: HttpClient,
    private monsters: MonsterService,
    private loadout: LoadoutService
  ) {}

  ngOnInit() {
    this.headers = new HttpHeaders().set('access-control-allow-origin', "http://localhost:8080/")
    this.http.get('http://fakeface.rest/face/json?gender=male').subscribe(data => console.log(data))
    console.log(this.headers)
    let hood = "";
    let streetX;
    let streetY;
    for (let i = 0; i < 100; i++) {
      i < 20
        ? ((hood = faker.address.city()), this.hoods.push(hood))
        : (hood = hood);

      streetX = faker.address.streetName();
      streetY = faker.address.streetName();
      this.streetsX.push(streetX);
      this.streetsY.push(streetY);
    }
    this.idImageUrl = "";
  }
  getPerson() {
    this.dataReady === false;
    this.statsReady === true ? (this.statsReady = false) : this.statsReady;
    let street = this.rolls.roll4();
    let streetName = "";
    street % 2 === 0
      ? (streetName = this.streetsX[this.rolls.roll100()])
      : (streetName = this.streetsY[this.rolls.roll100()]);

    let thing = faker.helpers.createCard();
    //  thing.race = this.races[this.rolls.roll10()]

    thing.address.streetA = this.hoods[this.rolls.roll20()];
    this.card = thing;
   console.log(this.headers, " !!!!!!!!")
   
    this.http.get('https://cors-anywhere.herokuapp.com/http://fakeface.rest/face/json?gender=male')
      .pipe(take(1))
      .subscribe(
      (data) => {
      let res:any = data;
      console.log("were in the response")
      this.idImageUrl = res.image_url;
      console.log(this.idImageUrl);
      this.dataReady = true;
    },
    (error) => {
      console.log(error)
    }
    );
   
  
  }
  getEasyStats() {
    let monster = this.easyMobs[this.rolls.roll6()];
    this.http
      .get("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/" + monster)
      .pipe(take(1))
      .subscribe((data) => {
        this.card.stats = data;
        console.log(monster);
        this.statsReady = true;
      });
  }
  getMediumStats() {
    let monster = this.mediumMobs[this.rolls.roll6()];
    this.http
      .get("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/" + monster)
      .pipe(take(1))
      .subscribe((data) => {
        this.card.stats = data;
        console.log(monster);
        this.statsReady = true;
      });
  }
  getHardStats() {
    let monster = this.hardMobs[this.rolls.roll6()];
    this.http
      .get("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/" + monster)
      .pipe(take(1))
      .subscribe((data) => {
        this.card.stats = data;
        console.log(monster);
        this.statsReady = true;
      });
  }
  getWussStats() {
    let monster = this.wussMobs[this.rolls.roll6()];
    this.http
      .get("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/" + monster)
      .pipe(take(1))
      .subscribe((data) => {
        this.card.stats = data;
        console.log(monster);
        this.statsReady = true;
      });
    let loadout = this.getLoadout();
    this.card.loadout = loadout;
    console.log(this.card.loadout)
  }
  getLoadout() {

    return this.loadout.getLoadout();
  
  }
}
