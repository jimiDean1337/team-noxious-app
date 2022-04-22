import { NgModule } from '@angular/core';
import { PasswordResetComponent } from './password-reset.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PasswordResetComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PasswordResetModule { }
