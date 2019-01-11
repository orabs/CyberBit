import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlackBoxesComponent } from './black-boxes/black-boxes.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { TimePeriodComponent } from './time-period/time-period.component';
import { SummaryComponent } from './summary/summary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from '../share.service';
@NgModule({
  declarations: [
    AppComponent,
    BlackBoxesComponent,
    ProtocolsComponent,
    TimePeriodComponent,
    SummaryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
 
 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
