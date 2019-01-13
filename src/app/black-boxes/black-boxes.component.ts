import { Component } from '@angular/core';
import { mockData } from '../../mock';
import { SharedService } from '../../share.service';
import { Device } from '../../interfaces/device.interface';
import { BlackBox } from '../../interfaces/blackbox.interface';

@Component({
  selector: 'app-black-boxes',
  templateUrl: './black-boxes.component.html',
  styleUrls: ['./black-boxes.component.css']
})


export class BlackBoxesComponent {


  checkBoxes_elements = [];

  // isCollapsed status for each group
  isCollapsed = [false, false, false];

  allGroups: BlackBox[] = mockData.device_groups;
  checkedReultsList: Array < Array < Device >> = [
    [],
    [],
    []
  ]

  constructor(public share: SharedService) {}


  // open\close the group by click on arrow
  groupToggle(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index]
  }

  // validator if all the children in group are checked
  areAllChildrenChecked(index: number) {
    let allDevices: Array < BlackBox > = this.share.getDevices()
    let checkedDevices = this.share.getCheckedDevices()
    if (allDevices[index].devices.length == checkedDevices[index].length) {
      return true
    }
    return false
  }

  // Check/Uncheck certain device Event handler
  checkBoxUpdateReults(event: any, device: Device, index: number) {
    if (event.target.checked) {
      this.share.checkDevices(device, index)

    } else {
      this.share.uncheckDevices(device, index)
    }
  }

  // Check/Uncheck certain group Event handler
  updateGroupResults(event: any, index: number) {
    if (event.target.checked) {
      this.share.checkAllGroup(index)
    } else {
      this.share.uncheckAllGroup(index)
    }

  }
}
