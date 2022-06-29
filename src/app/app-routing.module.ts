import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerOverviewComponent} from "./components/customer-overview/customer-overview.component";
import {OtherViewsComponent} from "./components/other-views/other-views.component";

const routes: Routes = [
  {path: 'customer-overview', component: CustomerOverviewComponent},
  {path: 'reports', component: OtherViewsComponent, data: {title: 'Reports'}},
  {path: 'file-transcoding', component: OtherViewsComponent, data: {title: 'File Transcoding'}},
  {path: 'notification-center', component: OtherViewsComponent, data: {title: 'Notification Center'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
