import { Component, OnInit } from '@angular/core';
import { DeviceUsageStatsService} from 'src/app/config/device-usage-stats.service';

@Component({
selector: 'app-horizontal-processbar',
templateUrl: './horizontal-processbar.component.html',
styleUrls: ['./horizontal-processbar.component.css'],
})

export class HorizontalProcessbarComponent {
  dottes = 8;
  dottesWidth = 100 / this.dottes;

  device;

  constructor(private deviceUsageStats: DeviceUsageStatsService) { }
}
