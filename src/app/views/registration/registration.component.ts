import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { NotificationsService } from 'src/app/core/services/notifications.service';
// import { catchError } from 'rxjs';

@Component({
  selector: 'tna-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formModel?: any = {};

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cookie: CookieService,
    private notifications: NotificationsService,
    private reCaptcha: ReCaptchaV3Service,
    ) { }

  public async registerWithGoogle() {
    try {
      const results = await this.auth.google();
      await this.userService.createUserFromGoogle(results)
      return await this.registrationSuccess(results, 'google')
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async registerWithEmailAndPass(input: any) {
    /* TODO: Finish Recaptcha3 Setup
    let response: any;
    */
   const capKey = '6LfNCD4fAAAAADp_z-m3opajJw-NzFJXXGx2o5Ta';
    const {firstname, lastname, email, username, pass} = input;
    try {
      const results = await this.auth.register(email, pass);
      this.reCaptcha.execute(capKey, 'registration', token => {
        console.log('Recapthcah token: ', token);
      })
      await this.userService.createUserFromEmail(firstname, lastname, email, username, results.user?.uid)
      return await this.registrationSuccess(results);
    } catch(err) {
      return this.handleError(err);
    }

  }

  /* TODO: Verify Recaptcha bfore registering user and creating user
  verifyRecaptcha($event: any) {

  } */

  ngOnInit(): void {

  }

  private registrationSuccess(results: any, type = 'email/pass') {
    console.log('Registration Success!', results, type)
    this.cookie.set('_tna_USER_ID', results.user.uid, undefined, undefined, undefined, true, "Strict");
    this.notifications.success('You are now registered!', 'Success')
    return this.router.navigate([`/user`, results.user.uid, 'dashboard'], {relativeTo: this.route})
  }

  private handleError(error: any) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      this.notifications.error('The password is too weak.', 'Uh Oh');
    } else {
      this.notifications.error(errorMessage, 'Whoops');
    }
    // console.log(error);
    console.error('ERROR! Could Not Register User', error);
  }

}
