import { Component, OnInit } from '@angular/core';
import { DAY } from '../enums/DAY'
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
 days = DAY
  constructor() { }



  ngOnInit(): void {
  }

}
