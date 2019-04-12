import { Injectable } from '@angular/core';
import { character } from './character.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pvpUrl = "https://us.api.blizzard.com/wow/character/Blackhand/Resurect?fields=pvp&locale=en_US&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";
  statsUrl = "https://us.api.blizzard.com/wow/character/Blackhand/Resurect?fields=stats&locale=en_US&jsonp=callMeToo&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";
  statisticsUrl = "https://us.api.blizzard.com/wow/character/Blackhand/Resurect?fields=statistics&locale=en_US&jsonp=getDataAgain&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";
  itemsUrl = "https://us.api.blizzard.com/wow/character/Blackhand/Resurect?fields=items&locale=en_US&jsonp=getItems&access_token=USlj8KxDXRAroCoIwPmoNRcqdwkhbCS4Ja";

  constructor(private _http: HttpClient) { }
  bob = "bob";
  getCharacters(){
    var result = this._http.get(this.pvpUrl);
    console.log(result);
    return result;
  }
}
