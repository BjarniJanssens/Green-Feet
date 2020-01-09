import { Component, OnInit } from '@angular/core';
import 'src/app/home/home.component';
import { PowerUsageStatsService } from 'src/app/circle-config/power-usage-stats.service';

@Component({
  selector: 'app-power-usage',
  templateUrl: './power-usage.component.html',
  styleUrls: ['./power-usage.component.css']
})
export class PowerUsageComponent implements OnInit {
  percent;
  title;
  subtitle;
  animationDuration;

  radius = 60;
  space = -10;
  outerStrokeGradient = true;
  outerStrokeWidth = 10;
  outerStrokeColor = '#41f2de';
  outerStrokeGradientStopColor = '#4694ff';
  innerStrokeColor = '#3D3D3D';
  innerStrokeWidth = 10;
  backgroundGradient = true;
  backgroundColor = '#3D3D3D';
  backgroundGradientStopColor = '#000000';
  backgroundPadding = -15;
  titleColor = '#f8f8ff';
  titleFontSize = 30;
  subtitleColor = '#f8f8ff';
  subtitleFontSize = 10;
  showUnits = false;
  animateTitle = false;
  showBackground = true;
  responsive = true;

  constructor(private powerUsageStats: PowerUsageStatsService) { }

  ngOnInit() {
    this.percent = this.powerUsageStats.percent;
    this.title = this.powerUsageStats.title;
    this.subtitle = this.powerUsageStats.subtitle;
    this.animationDuration = this.powerUsageStats.animationDuration;
  }

}
