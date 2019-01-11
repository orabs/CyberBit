import { Component, OnInit } from '@angular/core';
import { mockData } from '../../mock';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-time-period',
  templateUrl: './time-period.component.html',
  styleUrls: ['./time-period.component.css']
})
export class TimePeriodComponent implements OnInit {
  times = mockData.times;
  constructor(public share:SharedService) { }

  ngOnInit() {
  }

  updateRadioResults(time){

    this.share.setTimePeriod(time);
    console.log(time)
  }

}
