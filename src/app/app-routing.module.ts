import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { HistoryTimelineComponent } from './history-timeline/history-timeline.component';
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

const routes: Routes = [
  {path: '',   redirectTo: '/Vision_Mission_And_Value', pathMatch: 'full' },
  {path: 'Vision_Mission_And_Value', component: VisionMissionValueComponent},
  {path: 'History_And_Timeline', component: HistoryTimelineComponent },
  {path: 'Programs', component: ProgramsComponent},
  {path: 'Membership', component: MembershipComponent},
  {path: 'Board_of_Director', component: BoardOfDirectorComponent},
  {path: 'Contact_Us', component: ContactUsComponent},
  {path: 'Program_Service', component: ProgramServiceComponent,
    children: [
      { path: 'Service_Overview', component: ServiceOverviewComponent,
        children: [
          { path: 'Feature_Programs', component: FeatureProgramsComponent },
          { path: 'News_And_Events', component: NewsEventsComponent }
        ]
      }
    ]
  },
  {path: 'Multimedia', component: MultimediaComponent,
    children: [
      { path: 'Video_Gallery', component: VideoGalleryComponent },
      { path: 'Picture_Gallery', component: PictureGalleryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
