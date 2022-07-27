import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComingSoonComponent } from './courses-coming-soon/courses-coming-soon.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent,
    CoursesComingSoonComponent,
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
