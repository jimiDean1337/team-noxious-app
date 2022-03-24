import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    UserComponent,
    AccountComponent,
    ProfileComponent,
    DashboardComponent,
    CoursesComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
