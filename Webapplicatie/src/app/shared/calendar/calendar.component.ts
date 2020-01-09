import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {

  public date: Date = new Date(Date.now());

  public dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

  constructor() { }

  public formatter2 = (date: Date) => {
    return `${this.monthFormatter.format(date)} ${date.getDate()}, ${date.getFullYear()}`;
  }

  public ngOnInit(): void {}
}
