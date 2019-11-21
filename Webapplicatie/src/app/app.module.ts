import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { HeaderComponent } from './main/header/header.component';
import { PowerUsageComponent } from './shared/power-usage/power-usage.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { DevicesComponent } from './devices/devices.component';
import { TrophysComponent } from './trophys/trophys.component';
import { CompareComponent } from './compare/compare.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { PowerChartComponent } from './shared/power-chart/power-chart.component';
import { CalendarComponent } from './shared/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PowerUsageComponent,
    HomeComponent,
    RoomsComponent,
    DevicesComponent,
    TrophysComponent,
    CompareComponent,
    AccountComponent,
    SettingsComponent,
    PowerChartComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
