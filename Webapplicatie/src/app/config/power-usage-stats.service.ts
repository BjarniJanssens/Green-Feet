import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PowerUsageStatsService {

  constructor() { }
  percent = 0;
  title = '';
  subtitle = '';
  animationDuration = 0;

}
