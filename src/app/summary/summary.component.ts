import { Component, OnInit } from '@angular/core';
import { mockData } from '../../mock';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  allData = mockData

  summary={devices:[2,4,5],protocols:[2,4],time:3}
  summaryData;
  constructor(public share:SharedService) {

    this.summaryData=share.getDevices()
    for (let key in this.summary) {


    }
      
 

   }

  ngOnInit() {
  }

}
