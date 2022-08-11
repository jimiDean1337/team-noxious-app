import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DonateComponent } from './views/donate/donate.component';
import { FaqComponent } from './views/faq/faq.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { PasswordResetComponent } from './views/password-reset/password-reset.component';
import { RankingsComponent } from './views/rankings/rankings.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { UserComponent } from './views/user/user.component';
import { UserModule } from './views/user/user.module';
import { VerifyEmailComponent } from './views/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'rankings',
    component: RankingsComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'registration',
  //   component: RegistrationComponent
  // },
  // {
  //   path: 'password-reset',
  //   component: PasswordResetComponent
  // },
  // {
  //   path: 'verify-email',
  //   component: VerifyEmailComponent
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
