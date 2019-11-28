import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-power-chart',
  templateUrl: './power-chart.component.html',
  styleUrls: ['./power-chart.component.css']
})

export class PowerChartComponent implements OnInit {
  @ViewChild('myCanvas', {
    static: true
  }) canvas: ElementRef;
  public chartData: ChartDataSets[] = [{
    data: [4.9, 5.2, 4.7, 5.9, 3.3, 4.3, 4.2, 3.5, 4.6, ],
    label: ''
  }];
  public chartLabels: Label[] = ['5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM'];
  public chartOptions = {
    type: 'line',
    options: {
      responsive: true,
      title: {
        display: true,
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: '#f8f8ff',
          fontFamily: 'displayBold',
          max: 10
        },
        scaleLabel: {
          display: true,
          fontColor: '#f8f8ff',
          fontFamily: 'displayBold',
          labelString: 'kWh'
        },
        gridLines: {
          display: true,
          color: '#f8f8ff',
          zeroLineColor : '#f8f8ff',
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#f8f8ff',
          fontFamily: 'displayBold',
        },
        gridLines: {
          display: true,
          color: 'transparent',
          zeroLineColor : '#000000',
        },
      }],
    },
    legend: {
      display: false,
    },
  };

  public backgroundChartPlugins = [{
    beforeDraw(chart, easing) {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const top = chartArea.top; // Use a value of 0 here to include the legend

      ctx.save();
      ctx.fillStyle = '#3d3d3d';

      ctx.fillRect(chartArea.left, top, chartArea.right - chartArea.left, chartArea.bottom - top);
      ctx.restore();
    }
  }];

  public chartLegend = true;
  public chartType = 'line';

  public chartColors: Color[] = [{
  }];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(1, 'rgba(70, 148, 255, 1)');
    gradient.addColorStop(.9, 'rgba(70, 148, 255, 1)');
    gradient.addColorStop(.6, 'rgba(65, 242, 222, .8)');
    gradient.addColorStop(0, 'rgba(65, 242, 222, .6)');
    this.chartColors = [{
      borderColor: '#41F2DE',
      borderWidth: 3,
      pointHitRadius: 20,
      pointBackgroundColor: '#41F2DE',
      pointBorderColor: '#41F2DE',
      pointBorderWidth: 2,
      pointHoverBackgroundColor: '#f8f8ff',
      backgroundColor: gradient
    }];
  }

}
