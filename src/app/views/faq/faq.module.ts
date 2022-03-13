import { NgModule } from '@angular/core';
import { FaqComponent } from './faq.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FaqModule { }
