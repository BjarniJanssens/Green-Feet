import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { IgxDatePickerModule } from 'igniteui-angular';

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
import { BarChartComponent } from './rooms/bar-chart/bar-chart.component';
import { HorizontalProcessbarComponent } from './devices/horizontal-processbar/horizontal-processbar.component';
import { HorizontalProcessbarColumnComponent } from './devices/horizontal-processbar-column/horizontal-processbar-column.component';



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
    CalendarComponent,
    BarChartComponent,
    HorizontalProcessbarComponent,
    HorizontalProcessbarColumnComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ChartsModule,
    IgxDatePickerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
