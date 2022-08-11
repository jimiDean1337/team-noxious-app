import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
