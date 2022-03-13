import { NgModule } from '@angular/core';
import { DonateComponent } from './donate.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DonateComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DonateModule { }
