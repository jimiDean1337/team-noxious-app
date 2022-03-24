import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    GalleryModule,
    LightboxModule,
    LoginModule,
    CoreModule,
    SharedModule,
    AboutModule,
    HomeModule,
    ContactModule,
    CoursesModule,
    DonateModule,
    TeachersModule,
    RegistrationModule,
    FaqModule,
    PageNotFoundModule,
    UserModule,
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
