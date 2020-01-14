import { Injectable } from '@angular/core';
import { Device } from 'src/app/model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceUsageStatsService {

  devicesObjects = [
    new Device('Television', 0.20),
    new Device('Lights', 0.20),
    new Device('Console', 0.11),
    new Device('Fan', 0.20),
    new Device('Phone Charger', 0.20),
    new Device('Desk Light', 0.20),
    new Device('Other', 0.20),
  ];

  constructor() {}

  getAllDevices() {
    return this.devicesObjects;
  }

}
