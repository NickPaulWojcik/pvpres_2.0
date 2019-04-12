import { Component, OnInit } from '@angular/core';
import {DatastoreService} from '../datastore.service'
import { race } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private ra: DatastoreService) { }
  printName(realm: string, chara: string){
    this.ra.setName(chara, realm);
  }
  

  ngOnInit() {
    
  }

}
