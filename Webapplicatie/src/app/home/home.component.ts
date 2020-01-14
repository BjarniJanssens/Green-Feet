import { Component, OnInit } from '@angular/core';
import { PowerUsageStatsService } from '../config/power-usage-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  MaxkWh = 20;
  kWh = 16.04;
  percent = this.kWh / this.MaxkWh * 100;
  duration = 1000;
  durationPercent = this.duration * this.percent / 100;
  kWhPrice = 0.23;
  consuptionPrice = Math.round(this.kWh * this.kWhPrice * 100) / 100;

  constructor(private powerUsageStats: PowerUsageStatsService) { }

  ngOnInit() {
      this.powerUsageStats.percent = this.percent;
      this.powerUsageStats.title = '€' + this.consuptionPrice;
      this.powerUsageStats.subtitle = this.kWh + 'kWh';
      this.powerUsageStats.animationDuration = this.durationPercent;
  }

}
