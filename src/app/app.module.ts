import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from './material-module/material.module';
//services
import { SidenavService } from './services/sidenav.service';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { HistoryTimelineComponent } from './history-timeline/history-timeline.component';
import { CalenderRightPanelComponent } from './calender-right-panel/calender-right-panel.component';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HeaderComponent,
    VisionMissionValueComponent,
    HistoryTimelineComponent,
    CalenderRightPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule
  ],
  providers: [SidenavService,  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
