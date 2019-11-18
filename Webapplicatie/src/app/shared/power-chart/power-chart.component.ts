import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  ChartDataSets
} from 'chart.js';
import {
  Color,
  Label
} from 'ng2-charts';

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
    data: [3.9, 4.2, 3.7, 4.9, 2.3, 3.3, 4.2, 2.5, 3.6, ],
    label: ''
  }];
  public chartLabels: Label[] = ['5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM'];
  public chartOptions = {
    type: 'line',
    responsive: true,
    options: {
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
          color: '#f8f8ff'
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: '#f8f8ff',
          fontFamily: 'displayBold',
        }
      }],
    },
    legend: {
      display: false,
    },
  };

  public chartLegend = true;
  public chartType = 'line';

  public chartColors: Color[] = [{
  }];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(1, '#4694FF');
    gradient.addColorStop(.9, '#4694FF');
    gradient.addColorStop(.6, '#41F2DE');
    gradient.addColorStop(0, '#41F2DE');
    this.chartColors = [{
      borderColor: '#4694FF',
      borderWidth: 5,
      pointBackgroundColor: '#f8f8ff',
      pointBorderColor: '#f8f8ff',
      pointBorderWidth: 1,
      backgroundColor: gradient
    }];
  }

}
