import { NgModule } from '@angular/core';
import { VerifyEmailComponent } from './verify-email.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    SharedModule
  ]
})
export class VerifyEmailModule { }
