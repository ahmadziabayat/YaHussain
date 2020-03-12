import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { HistoryTimelineComponent } from './history-timeline/history-timeline.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Vision, Mission & Value', pathMatch: 'full' },
  {path: 'Vision, Mission & Value', component: VisionMissionValueComponent},
  {path: 'History and Timeline', component: HistoryTimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
