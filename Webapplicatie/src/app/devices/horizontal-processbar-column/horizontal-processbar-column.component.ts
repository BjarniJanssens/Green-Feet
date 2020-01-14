import { Component, OnInit } from '@angular/core';
import { DeviceUsageStatsService} from 'src/app/config/device-usage-stats.service';
import {Device} from '../../model/device.model';

@Component({
  selector: 'app-horizontal-processbar-column',
  templateUrl: './horizontal-processbar-column.component.html',
  styleUrls: ['./horizontal-processbar-column.component.css']
})
export class HorizontalProcessbarColumnComponent implements OnInit {

  devices: Device[];

  constructor(private deviceUsageStats: DeviceUsageStatsService) { }

  ngOnInit() {
    this.devices = this.deviceUsageStats.devicesObjects;
  }

}
