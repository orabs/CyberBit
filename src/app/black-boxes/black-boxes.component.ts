import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { mockData } from '../../mock';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-black-boxes',
  templateUrl: './black-boxes.component.html',
  styleUrls: ['./black-boxes.component.css']
})


export class BlackBoxesComponent implements OnInit {


  checkBoxes_elements=[];

  // isCollapsed status for each group
   isCollapsed = [false,false,false];

  allGroups = mockData.device_groups;
  checkedReultsList=[]

  constructor(public share: SharedService) { }


  ngOnInit() {


  }
  // return group checkbox status
  getStatus(groups:any) {
    return groups.checked
  }

  // open\close the group by click on arrow
  groupToggle(index:number) {
    this.isCollapsed[index] = !this.isCollapsed[index]
  }

  isAllChildrenChecked(groups){

    // console.log(groups.ViewChildren())

  }

  groupCheckboxToggle(event:any,index:number) {
    if (event.target.checked){
     this.isCollapsed[index]=true
      this.checkedReultsList = this.allGroups[index].devices
      this.share.setDevices(this.checkedReultsList)
     console.log(this.checkedReultsList)
    }else {
      this.checkedReultsList=[]
      this.share.setDevices(this.checkedReultsList)
      console.log(this.checkedReultsList)
    } ;
  }

  checkBoxUpdateReults(event, device) {
    if (event.target.checked) {
      this.checkedReultsList.push(device)
      this.share.setDevices(this.checkedReultsList)
     } else {
      let index =this.checkedReultsList.findIndex(v => v.id === device.id);
      this.checkedReultsList.splice(index,1)
      this.share.setDevices(this.checkedReultsList)
   

     }

  }

  updateGroupResults(event,index){
    event.target.checked

  }
}
