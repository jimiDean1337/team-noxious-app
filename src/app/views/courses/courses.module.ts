import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
