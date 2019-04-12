import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatastoreService} from '../datastore.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  constructor(private http: HttpClient, private ra: DatastoreService) { }
  // statsUrl = "https://us.api.blizzard.com/wow/character/" + this.ra.getRealm + "/" + this.ra.getName + "?fields=stats&locale=en_US&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";
  // itemsUrl = "https://us.api.blizzard.com/wow/character/Tichondrius/Dellybean?fields=items&locale=en_US&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";
  result;
  result2;
  json: string;
  statsUrl: string;
  itemsUrl: string;
  

  name: string;
  realm: string;
  level: number;
  achievements: number;
  health: number;
  strength: number;
  agility: number;
  intellect: number;
  stamina: number;
  critical: number;
  haste: number;
  mastery: number;
  versatility: number;
  mana: number;

  ilevel: number;
  ilevelInv: number;
  hk: number;

  ihead: number;
  ineck: number;
  ishoulders: number;
  iback: number;
  ichest: number;
  iwrist: number;
  ihands: number;
  iwaist: number;
  ilegs: number;
  ifeet: number;
  iring1: number;
  iring2: number;
  itrink1: number;
  itrink2: number;
  imain: number;
  ioff: number;
  ishield: number;

  ngOnInit() {
    try{
        this.statsUrl = `https://us.api.blizzard.com/wow/character/${this.ra.getRealm()}/${this.ra.getName()}?fields=stats&locale=en_US&access_token=${this.ra.getAuth()}`;
        this.itemsUrl = `https://us.api.blizzard.com/wow/character/${this.ra.getRealm()}/${this.ra.getName()}?fields=items&locale=en_US&access_token=${this.ra.getAuth()}`;
      this.http.get(this.statsUrl).subscribe(data => {
        this.json = JSON.stringify(data);
        this.result = JSON.parse(this.json);

        this.name = this.result.name;
        this.realm = this.result.realm;
        this.level = this.result.level;
        this.achievements = this.result.achievementPoints;
        this.health = this.result.stats.health;
        this.strength = this.result.stats.str;
        this.agility = this.result.stats.agi;
        this.intellect = this.result.stats.int;
        this.stamina = this.result.stats.sta;
        this.critical = this.result.stats.crit;
        this.haste = this.result.stats.haste;
        this.mastery = this.result.stats.mastery;
        this.versatility = this.result.stats.versatility;
        this.mana = this.result.stats.power;
        this.hk = this.result.totalHonorableKills;
      });
      this.http.get(this.itemsUrl).subscribe(data => {
        this.json = JSON.stringify(data);
        this.result2 = JSON.parse(this.json);

        this.ilevelInv = this.result2.items.averageItemLevel;
        this.ilevel = this.result2.items.averageItemLevelEquipped;
        this.ihead = this.result2.items.head.itemLevel;
        this.ineck = this.result2.items.neck.itemLevel;
        this.ishoulders = this.result2.items.shoulder.itemLevel;
        this.iback = this.result2.items.back.itemLevel;
        this.ichest = this.result2.items.chest.itemLevel;
        this.iwrist = this.result2.items.wrist.itemLevel;
        this.ihands = this.result2.items.hands.itemLevel;
        this.iwaist = this.result2.items.waist.itemLevel;
        this.ilegs = this.result2.items.legs.itemLevel;
        this.ifeet = this.result2.items.feet.itemLevel;
        this.iring1 = this.result2.items.finger1.itemLevel;
        this.iring2 = this.result2.items.finger2.itemLevel;
        this.itrink1 = this.result2.items.trinket1.itemLevel;
        this.itrink2 = this.result2.items.trinket2.itemLevel;
        this.imain = this.result2.items.mainHand.itemLevel;
        try{
          this.ioff = this.result2.items.offHand.itemLevel;
        }catch(e){
          this.ioff = 0;
        }
        try{
          this.ishield = this.result2.items.ishield.itemLevel;
        }catch(e){
          this.ishield = 0;
        }
      });
    }catch(e){
      console.log("player not found");
    }
  }

}
