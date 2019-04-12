import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { PvpComponent } from './pvp/pvp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pvp', component: PvpComponent},
  { path: 'general', component: GeneralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
