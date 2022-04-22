import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'tna-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel?: any = {};
  aFormGroup: FormGroup = this.formBuilder.group({
    recaptcha: ['', Validators.required]
  });
  recaptchaConfig: any = {
    type: 'image',
    badge: '',
    theme: 'dark',
    recaptcha: '',
    reset: function() {console.log('Cap Reset')},
    ready: function() {console.log('Cap Reset')},
    load: function() {console.log('Cap Reset')},
    success: function(e: any) {console.log('Cap Reset', e)},
  }
  siteKey = '6LfNCD4fAAAAADp_z-m3opajJw-NzFJXXGx2o5Ta';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private notifications: NotificationsService,
    private reCaptcha: ReCaptchaV3Service,
    private cookie: CookieService) { }

  public async loginWithGoogle() {
    try {
      const results = await this.auth.google();
      return this.success(results);
    } catch (err) {
      throw new Error('')
    }
  }


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
    this.cookie.set('USER_ID', results.user.uid, undefined, undefined, undefined, true, "Strict");
    this.notifications.success('You are now Signed in!', 'Success')
    this.router.navigate([`/user`, results.user.uid, 'dashboard'], {relativeTo: this.route});

  }

  private handleError(err: any) {
    this.notifications.error('Could not sign in!', 'Error')
    console.error('ERROR! Could Not Login User', err);
  }

}
