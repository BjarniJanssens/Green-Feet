import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-usage',
  templateUrl: './power-usage.component.html',
  styleUrls: ['./power-usage.component.css']
})
export class PowerUsageComponent implements OnInit {
  percent = 75;
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
  title = '€6,24';
  titleColor = '#f8f8ff';
  titleFontSize = 30;
  subtitle = '16,4kWh';
  subtitleColor = '#f8f8ff';
  subtitleFontSize = 10;
  showUnits = false;
  animateTitle = false;
  animationDuration = 1000;
  showBackground = true;
  responsive = true;

  constructor() { }

  ngOnInit() {
  }

}
