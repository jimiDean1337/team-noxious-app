import { NgModule } from '@angular/core';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    SharedModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
