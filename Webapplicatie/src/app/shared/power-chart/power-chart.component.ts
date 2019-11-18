import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-power-chart',
  templateUrl: './power-chart.component.html',
  styleUrls: ['./power-chart.component.css']
})
export class PowerChartComponent implements OnInit {
  public chartData: ChartDataSets[] = [{
    data: [65, 59, 80, 81, 56, 80],
    label: 'KW Generated'
  }];
  public chartLabels: Label[] = ['4:00', '8:00', '12:00', '16:00', '20:00', '24:00'];
  public chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'KW Generated today'
    }
  };
  public chartLegend = true;
  public chartType = 'line';

  public chartColors: Color[] = [{
    backgroundColor: 'rgb(0, 214, 198, 0.5)',
    borderColor: 'rgb(0, 214, 198)'
  }];

  constructor() {}

  ngOnInit() {}

}
