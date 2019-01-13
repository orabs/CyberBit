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
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// const appRoutes:Routes=[
//   {path:'',component:AppComponent},
//   {path:':devices:protocols',component:AppComponent},
//   {path:':devices/:protocols/:times',component:AppComponent},


// ]
@NgModule({
  declarations: [
    AppComponent,
    BlackBoxesComponent,
    ProtocolsComponent,
    TimePeriodComponent,
    SummaryComponent,
    
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // RouterModule.forRoot(appRoutes)
    
    
 
 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
