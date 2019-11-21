import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild('myCanvas', {
    static: true
  }) canvas: ElementRef;
  public chartData: ChartDataSets[] = [{
    data: [3.6, 6.2, 5.5, 6.9, 5.5, 6.2, 3.6],
    label: ''
  }];
  public chartLabels: Label[] = ['BEDROOM 1', 'KITCHEN', 'BATHROOM', 'BEDROOM 2', 'LIVING ROOM', 'BEDROOM 3', 'STORAGE'];
  public chartOptions = {
    type: 'bar',
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
          zeroLineColor : '#3D3D3D',
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#f8f8ff',
          fontFamily: 'displayBold',
        },
        gridLines: {
          display: true,
          color: '#000000',
          zeroLineColor : '#000000',
        },
      }],
    },
    legend: {
      display: false,
    },
  };

  public chartLegend = true;
  public chartType = 'bar';

  public chartColors: Color[] = [{
  }];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(1, 'rgba(70, 148, 255, 1)');
    gradient.addColorStop(.9, 'rgba(70, 148, 255, 1)');
    gradient.addColorStop(.6, 'rgba(65, 242, 222, 1)');
    gradient.addColorStop(0, 'rgba(65, 242, 222, 1)');
    this.chartColors = [{
      borderColor: '#41F2DE',
      borderWidth: 0,
      hoverBorderColor: '#f8f8ff',
      hoverBorderWidth: 2,
      backgroundColor: gradient
    }];
  }

}
