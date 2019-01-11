import { Component, OnInit } from '@angular/core';
import { mockData } from '../../mock';
import { Protocol } from '../../interfaces/protocols.interface';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {
  protocols = mockData.protocols;
  checkedReultsList=[]
  constructor(public share:SharedService) { }

  ngOnInit() {
  }


  checkBoxUpdateReults(event, device) {
    if (event.target.checked) {
      this.checkedReultsList.push(device)
      this.share.setProtocols(this.checkedReultsList)
    } else {
      let index = this.checkedReultsList.findIndex(v => v.id === device.id);
      this.checkedReultsList.splice(index, 1)
      this.share.setProtocols(this.checkedReultsList)


    }
  }

}
