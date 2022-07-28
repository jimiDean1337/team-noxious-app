import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { AppComponent } from './app.component';
import { LoginModule } from './views/login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './views/about/about.module';
import { HomeModule } from './views/home/home.module';
import { ContactModule } from './views/contact/contact.module';
import { CoursesModule } from './views/courses/courses.module';
import { DonateModule } from './views/donate/donate.module';
import { TeachersModule } from './views/teachers/teachers.module';
import { RegistrationModule } from './views/registration/registration.module';
import { FaqModule } from './views/faq/faq.module';
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';
import { UserModule } from './views/user/user.module';
import { CookieService } from 'ngx-cookie-service';
import { PasswordResetModule } from './views/password-reset/password-reset.module';
import { VerifyEmailModule } from './views/verify-email/verify-email.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RankingsModule } from './views/rankings/rankings.module';
import { AppRoutingModule } from './app-routing.module';
// import { TagInputModule } from 'ngx-chips';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true,
      enableHtml: true,
      closeButton: true
    }),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    SortableModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    // TagInputModule,
    GalleryModule,
    LightboxModule,
    LoginModule,
    SharedModule,
    CoreModule,
    UserModule,
    AboutModule,
    HomeModule,
    ContactModule,
    CoursesModule,
    DonateModule,
    TeachersModule,
    RegistrationModule,
    FaqModule,
    PageNotFoundModule,
    PasswordResetModule,
    VerifyEmailModule,
    RankingsModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService,
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: true,
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
