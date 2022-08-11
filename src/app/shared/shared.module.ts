import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TeacherProfileCardComponent } from './components/teacher-profile-card/teacher-profile-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AvatarCustomizerComponent } from './components/avatar-customizer/avatar-customizer.component';
import { TagInputModule } from 'ngx-chips';
import { NgxMasonryModule } from 'ngx-masonry';
import { CodingLanguagesGridComponent } from './components/coding-languages-grid/coding-languages-grid.component';
import { ToastrModule } from 'ngx-toastr';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { DonationsComponent } from './components/donations/donations.component';
// import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    TeacherProfileCardComponent,
    CourseCardComponent,
    AvatarCustomizerComponent,
    CodingLanguagesGridComponent,
    SafeHtmlPipe,
    DonationsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    // NgxPayPalModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxCaptchaModule,
    NgxMasonryModule,
    AccordionModule,
    BsDropdownModule,
    AlertModule,
    TabsModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    TooltipModule,
    TypeaheadModule,
    SortableModule,
    RatingModule,
    ModalModule,
    TagInputModule,
    BreadcrumbComponent,
    TeacherProfileCardComponent,
    CourseCardComponent,
    AvatarCustomizerComponent,
    CodingLanguagesGridComponent,
    SafeHtmlPipe,
    DonationsComponent,
  ]
})
export class SharedModule { }
