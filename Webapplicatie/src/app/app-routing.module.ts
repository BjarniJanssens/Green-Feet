import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DevicesComponent } from './devices/devices.component';
import { TrophysComponent } from './trophys/trophys.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { PowerChartComponent } from './shared/power-chart/power-chart.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'trophys', component: TrophysComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'account', component: AccountComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'powerChart', component: PowerChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
