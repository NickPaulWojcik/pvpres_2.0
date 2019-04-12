import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { PvpComponent } from './pvp/pvp.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent,
    PvpComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
