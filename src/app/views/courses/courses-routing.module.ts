import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComingSoonComponent } from './courses-coming-soon/courses-coming-soon.component';
// import { CourseDetailsComponent } from './course-details/course-details.component';
// import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComingSoonComponent
  },
  // {
  //   path: 'courses/course-details/:courseId',
  //   component: CourseDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
