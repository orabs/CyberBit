import { Injectable } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { Protocol } from './interfaces/protocols.interface';
import { PeriodTime } from './interfaces/period-time.interface';
import { mockData } from './mock';
import { BlackBox } from './interfaces/blackbox.interface';

@Injectable()

export class SharedService {
    devices: any = mockData.device_groups;
    protocols: Protocol[];
    periodTime: PeriodTime = mockData.times[0];


    
    setDevices(devices: any) {
        this.devices=devices;
    }

    setProtocols(protocol: Protocol[]) {
        this.protocols = protocol;
    }

    setTimePeriod(time: PeriodTime) {
        this.periodTime = time;
    }

    getDevices(): Array<BlackBox> {
        return this.devices
    }

    getProtocols(): Protocol[] {
        return this.protocols
    }

    getTimePeriod(): PeriodTime {
        return this.periodTime
    }

    // Check entire group and it devices
    checkAllGroup(index:number) {
        this.devices[index].devices.forEach(device => {
            device.active=1 
        });
    }

       // Unheck entire group and it devices
    uncheckAllGroup(index:number) {
        this.devices[index].devices.forEach(device => {
            device.active = 0
        });
     
    }

    // get only the checked devices (divide into 3 groups as arrays)
    getCheckedDevices():Array<Device[]> {
        let checkedDevices:Array<Device[]>=[[],[],[]];
        this.devices.forEach((group,index) => {
            group.devices.forEach(device => {
                device.active==1 ? checkedDevices[index].push(device) : null
            });
            
        });
        return checkedDevices
    }


    // check specific device by group index
    checkDevices(device:Device,index:number){
        this.devices[index].devices.find(x => x.id == device.id).active=1

    }

       // uncheck specific device by group index
    uncheckDevices(device:Device,index:number) {
        this.devices[index].devices.find(x => x.id == device.id).active = 0

    }

    // uncheck all device in all groups (clear button)
    uncheckAllDevices() {
        this.devices.forEach((group: BlackBox) => {
            group.devices.forEach(device => {
                device.active=0;
            });
        });
    }
}