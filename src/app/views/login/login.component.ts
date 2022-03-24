import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'tna-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel?: any = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cookie: CookieService) { }

  loginWithGoogle() {
    this.auth.google()
    .then(results => {
      this.success(results)
    })
    .catch(err => this.handleError(err))
  }

  // loginWithFacebook() {
  //   this.auth.facebook()
  //   .then(results => {
  //     this.success(results)
  //   })
  //   .catch(err => this.handleError(err))
  // }

  // loginWithGithub() {
  //   this.auth.github()
  //   .then(results => {
  //     this.success(results)
  //   })
  //   .catch(err => this.handleError(err))
  // }

  // loginWithTwitter() {
  //   this.auth.twitter()
  //   .then(results => {
  //     this.success(results)
  //   })
  //   .catch(err => this.handleError(err))
  // }

  loginWithEmail(email: string, pass: string) {
    this.auth.email(email, pass)
    .then(results => {
      this.success(results);
    })
    .catch(err => this.handleError(err))
  }

  ngOnInit(): void {
  }

  private success(results: any) {
    console.log('Login Success!', results)
    this.cookie.set('USER_ID', results.user.uid);
    return this.router.navigate([`/user`, results.user.uid, 'dashboard'], {relativeTo: this.route})
  }

  private handleError(err: any) {
    console.error('ERROR! Could Not Login User', err);
  }

}
