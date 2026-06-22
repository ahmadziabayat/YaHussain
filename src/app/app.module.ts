import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';

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
import { LanguageService } from './services/language.service';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { HistoryTimelineComponent } from './history-timeline/history-timeline.component';
import { CalenderRightPanelComponent } from './calender-right-panel/calender-right-panel.component';
import { ProgramsComponent } from './programs/programs.component';
import { MembershipComponent } from './membership/membership.component';
import { BoardOfDirectorComponent } from './board-of-director/board-of-director.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProgramServiceComponent } from './program-service/program-service.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ServiceOverviewComponent } from './service-overview/service-overview.component';
import { FeatureProgramsComponent } from './feature-programs/feature-programs.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { PictureGalleryComponent } from './picture-gallery/picture-gallery.component';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidenavComponent,
    HeaderComponent,
    VisionMissionValueComponent,
    HistoryTimelineComponent,
    CalenderRightPanelComponent,
    ProgramsComponent,
    MembershipComponent,
    BoardOfDirectorComponent,
    ContactUsComponent,
    ProgramServiceComponent,
    MultimediaComponent,
    ServiceOverviewComponent,
    FeatureProgramsComponent,
    NewsEventsComponent,
    VideoGalleryComponent,
    PictureGalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule
  ],
  providers: [
    SidenavService,
    LanguageService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
