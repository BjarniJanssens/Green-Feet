import { Component, OnInit } from '@angular/core';
import { DeviceUsageStatsService} from 'src/app/config/device-usage-stats.service';

@Component({
  selector: 'app-horizontal-processbar-column',
  templateUrl: './horizontal-processbar-column.component.html',
  styleUrls: ['./horizontal-processbar-column.component.css']
})
export class HorizontalProcessbarColumnComponent implements OnInit {

  devices: any[];

  constructor(private deviceUsageStats: DeviceUsageStatsService) { }

  ngOnInit() {
    // console.log('executing get all')
    // this.deviceUsageStats.getAllDevices();
    // console.log(this.devices.length);
  }

}
