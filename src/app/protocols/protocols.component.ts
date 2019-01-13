import {
  Component,
  OnInit
} from '@angular/core';
import {
  mockData
} from '../../mock';
import {
  Protocol
} from '../../interfaces/protocols.interface';
import {
  SharedService
} from '../../share.service';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent {
  protocols = mockData.protocols;
  
  constructor(public share: SharedService) {}


  checkBoxUpdateReults(event, device) {
    
    let checkedReultsList =[]
    this.share.getProtocols() ? checkedReultsList = this.share.getProtocols(): null;
    if (event.target.checked) {
      checkedReultsList.push(device)
      this.share.setProtocols(checkedReultsList)
    } else {
      let index = checkedReultsList.findIndex(v => v.id === device.id);
      checkedReultsList.splice(index, 1)
      this.share.setProtocols(checkedReultsList)


    }
  }

  is_checked(protocol_list, protocol) {
    if (protocol_list){
    return protocol_list.findIndex(x=>x.name==protocol.name)
    }
    return -1


  }

}
