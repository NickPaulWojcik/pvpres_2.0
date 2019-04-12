import { Component, OnInit } from '@angular/core';
import { character } from '../character.model';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.css']
})
export class PvpComponent implements OnInit {
  pvpUrl: string;
  statisticsUrl: string;

  constructor(private dataService: DataService, private _http: HttpClient, private ra: DatastoreService) { }
  battlegroup: string;
  result;
  result2;
  authResult;
  twos: number;
  threes: number;
  rbgs: number;
  authToken: string;
  authUrl: string;

  highestTwos: number;
  highestThrees: number;
  highestFives: number;

  characters$: character[];
  ngOnInit() {
    try{
      this.pvpUrl = `https://us.api.blizzard.com/wow/character/${this.ra.getRealm()}/${this.ra.getName()}?fields=pvp&locale=en_US&access_token=${this.ra.getAuth()}`;
      this._http.get(this.pvpUrl).subscribe(data => {
        this.battlegroup = JSON.stringify(data);
        this.result = JSON.parse(this.battlegroup);
        
        this.twos = this.result.pvp.brackets.ARENA_BRACKET_2v2.rating;
        this.threes = this.result.pvp.brackets.ARENA_BRACKET_3v3.rating;
        this.rbgs = this.result.pvp.brackets.ARENA_BRACKET_RBG.rating;
      });

      this.statisticsUrl = `https://us.api.blizzard.com/wow/character/${this.ra.getRealm()}/${this.ra.getName()}?fields=statistics&locale=en_US&access_token=${this.ra.getAuth()}`;
      this._http.get(this.statisticsUrl).subscribe(data => {
        this.battlegroup = JSON.stringify(data);
        this.result2 = JSON.parse(this.battlegroup);
        
        this.highestTwos = this.result2.statistics.subCategories[9].subCategories[0].statistics[24].quantity;
        this.highestThrees = this.result2.statistics.subCategories[9].subCategories[0].statistics[23].quantity;
        this.highestFives = this.result2.statistics.subCategories[9].subCategories[0].statistics[22].quantity;
      });
    }catch(e){
      console.log("player not found");
    }
  }

}
