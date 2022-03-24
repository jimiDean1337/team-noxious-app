import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TeacherProfileCardComponent } from './components/teacher-profile-card/teacher-profile-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    TeacherProfileCardComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule,
    AlertModule,
    BreadcrumbComponent,
    TeacherProfileCardComponent,
    CourseCardComponent,
  ]
})
export class SharedModule { }
