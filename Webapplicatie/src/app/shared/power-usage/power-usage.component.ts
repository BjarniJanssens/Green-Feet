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
  radius;
  space;
  outerStrokeGradient;
  outerStrokeWidth;
  outerStrokeColor;
  outerStrokeGradientStopColor;
  innerStrokeColor;
  innerStrokeWidth;
  backgroundGradient;
  backgroundColor;
  backgroundGradientStopColor;
  backgroundPadding;
  title;
  titleColor;
  titleFontSize;
  subtitle;
  subtitleColor;
  subtitleFontSize;
  showUnits;
  animateTitle;
  animationDuration;
  showBackground;
  responsive;

  constructor(private powerUsageStats: PowerUsageStatsService) { }

  ngOnInit() {
    this.percent = this.powerUsageStats.percent;
    this.radius = this.powerUsageStats.radius;
    this.space = this.powerUsageStats.space;
    this.outerStrokeGradient = this.powerUsageStats.outerStrokeGradient;
    this.outerStrokeWidth = this.powerUsageStats.outerStrokeWidth;
    this.outerStrokeColor = this.powerUsageStats.outerStrokeColor;
    this.outerStrokeGradientStopColor = this.powerUsageStats.outerStrokeGradientStopColor;
    this.innerStrokeColor = this.powerUsageStats.innerStrokeColor;
    this.innerStrokeWidth = this.powerUsageStats.innerStrokeWidth;
    this.backgroundGradient = this.powerUsageStats.backgroundGradient;
    this.backgroundColor = this.powerUsageStats.backgroundColor;
    this.backgroundGradientStopColor = this.powerUsageStats.backgroundGradientStopColor;
    this.backgroundPadding = this.powerUsageStats.backgroundPadding;
    this.title = this.powerUsageStats.title;
    this.titleColor = this.powerUsageStats.titleColor;
    this.titleFontSize = this.powerUsageStats.titleFontSize;
    this.subtitle = this.powerUsageStats.subtitle;
    this.subtitleColor = this.powerUsageStats.subtitleColor;
    this.subtitleFontSize = this.powerUsageStats.subtitleFontSize;
    this.showUnits = this.powerUsageStats.showUnits;
    this.animateTitle = this.powerUsageStats.animateTitle;
    this.animationDuration = this.powerUsageStats.animationDuration;
    this.showBackground = this.powerUsageStats.showBackground;
    this.responsive = this.powerUsageStats.responsive;

  }

}
