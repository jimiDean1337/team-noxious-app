import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'courses/course-details/:courseId',
    component: CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
