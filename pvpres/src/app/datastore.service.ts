import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { race } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  username = "resurect";
  realm = "Blackhand";
  authUrl = "https://us.battle.net/oauth/token?grant_type=client_credentials&client_id=6d7104802b9e449e8fd825466c80335a&client_secret=3Xz97wpLVSpb5RVgV38PlxqRaW461jC2";
  authCode = "USgyWidWEHUUXib42vet7YVag1bhHvXQzQ";
  result;
  middleW: string;
  
  getName(){
    return this.username;
  }
  getRealm(){
    return this.realm;
  }
  getAuth(){
    return this.authCode;
  }

  setName(name: string, realmName: string){
    this.username = name;
    this.realm = realmName;
    this.ra.get(this.authUrl).subscribe(data => {
      this.middleW = JSON.stringify(data);
      this.result = JSON.parse(this.middleW);
      this.authCode = this.result.access_token;
    });

  }

  constructor(private ra: HttpClient) { }
}
