import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PageNotFoundModule { }
