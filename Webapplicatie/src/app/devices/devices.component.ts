import { Component, OnInit } from '@angular/core';
import { PowerUsageStatsService } from '../circle-config/power-usage-stats.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  percent = 20;
  duration = 1000;
  durationPercent = this.duration * this.percent / 100;
  kWh = 1.08;
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
