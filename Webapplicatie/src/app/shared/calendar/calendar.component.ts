import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./calendar.component.scss'],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  public date: Date = new Date(Date.now());

  public dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

  constructor() { }

  public formatter = (date: Date) => {
    // tslint:disable-next-line:max-line-length
    return `${this.dayFormatter.format(date)}`;
  }
  public formatter2 = (date: Date) => {
    // tslint:disable-next-line:max-line-length
    return `${this.monthFormatter.format(date)} ${date.getDate()}, ${date.getFullYear()}`;
  }

  public ngOnInit(): void {}
}
