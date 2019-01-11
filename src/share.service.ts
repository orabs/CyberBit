import { Injectable } from '@angular/core';
import { Device } from './interfaces/device.interface';
import { Protocol } from './interfaces/protocols.interface';
import { PeriodTime } from './interfaces/period-time.interface';

@Injectable()

export class SharedService {
    devices: Device[];
    protocols: Protocol[];
    periodTime: PeriodTime;

    setDevices(devices: Device[]) {
        this.devices=devices;
    }

    setProtocols(protocol: Protocol[]) {
        this.protocols = protocol;
    }

    setTimePeriod(time: PeriodTime) {
        this.periodTime = time;
    }

    getDevices() {
        return this.devices
    }

    getProtocols() {
        return this.protocols
    }

    getTimePeriod() {
        return this.periodTime
    }
}