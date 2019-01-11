import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(public share:SharedService) {

   }

  ngOnInit() {
  }
  isDevicesChosen() {
    if (this.share.getDevices()){
      let groupTemp = this.share.getDevices()
      for (let i = 0; i < groupTemp.length;i++){
        if (groupTemp[i].length) {
          return true
        }
      }
    }
    return false
  }


}
