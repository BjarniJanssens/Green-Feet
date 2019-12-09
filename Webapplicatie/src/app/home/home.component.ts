import { Component, OnInit } from '@angular/core';
import { PowerUsageStatsService } from '../circle-config/power-usage-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  percent = 75;
  duration = 1000;
  durationPercent = this.duration * this.percent / 100;
  kWh = 16.04;
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
