import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TeacherProfileCardComponent } from './components/teacher-profile-card/teacher-profile-card.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    TeacherProfileCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    BreadcrumbComponent,
    TeacherProfileCardComponent,
  ]
})
export class SharedModule { }
