import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { DonateComponent } from './views/donate/donate.component';
import { FaqComponent } from './views/faq/faq.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { UserComponent } from './views/user/user.component';
import { UserModule } from './views/user/user.module';

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
  // {
  //   path: 'user',
  //   loadChildren: () => import('./views/user/user.module').then(module => UserModule)
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
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
