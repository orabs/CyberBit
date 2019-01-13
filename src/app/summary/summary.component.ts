import {
  Component,
  OnInit
} from '@angular/core';
import {
  SharedService
} from '../../share.service';
import {
  
  HttpParams
} from '@angular/common/http';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {


  urlEx: string = ''
  params = new HttpParams()



  constructor(public share: SharedService) {}


  isDevicesChosen() {
    if (this.share.getCheckedDevices()) {
      let groupTemp = this.share.getCheckedDevices()
      for (let i = 0; i < groupTemp.length; i++) {
        if (groupTemp[i].length) {
          return true
        }
      }
    }
    return false
  }


  setParseDevices() {
    if (this.share.getCheckedDevices()) {
      let checkedDevices = []
      this.share.getCheckedDevices().forEach(devices => {
        devices.forEach(device => {
          checkedDevices.push(device.id)
        })
      });
   
      this.params = this.params.append('devices', checkedDevices.join());
    }
  }

  setParseProtocols() {
    if (this.share.getProtocols()) {
      let protocols = []
      this.share.getProtocols().forEach(protocol => {
        protocols.push(protocol.id)
      })

      this.params = this.params.append('protocols', protocols.join());
    }
  }

  setParseTime() {
    if (this.share.getTimePeriod()) {
      this.params = this.params.append('times', this.share.getTimePeriod().id.toString());
    }
  }

  startLearning(myForm:any) {

    this.setParseDevices()
    this.setParseProtocols()
    this.setParseTime()
    this.urlEx = this.params.toString()
    myForm.action = '/' + this.urlEx
    myForm.submit()

  }

  resetAllParameters() {

    this.share.uncheckAllDevices()
    this.share.setProtocols(null)
    this.share.setTimePeriod({
      "id": null,
      "name": null
    })
  }


}
