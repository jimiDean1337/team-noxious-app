import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

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
    private cookie: CookieService
    ) { }

  registerWithGoogle() {
    this.auth.google()
    .then(results => {
      this.userService.createUserFromGoogle(results)
      .then(ref => {
        this.registrationSuccess(results, 'google')
      })
      .catch(error => this.handleError(error))
    })
    .catch(err => this.handleError(err))
  }

  registerWithEmailAndPass(input: any) {
    const {firstname, lastname, email, username, pass} = input;
    this.auth.register(email, pass)
    .then(results => {
      console.log('Registered phase 1', results)
      this.userService.createFromEmail(firstname, lastname, email, username, results.user?.uid)
      .then(ref => {
        this.registrationSuccess(results);
      });
    })
    .catch(err => this.handleError(err))
  }

  ngOnInit(): void {
  }

  private registrationSuccess(results: any, type = 'email/pass') {
    console.log('Registration Success!', results, type)
    this.cookie.set('USER_ID', results.user.uid);
    return this.router.navigate([`/user`, results.user.uid, 'dashboard'], {relativeTo: this.route})
  }

  private handleError(error: any) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    // console.log(error);
    console.error('ERROR! Could Not Register User', error);
  }

// registerWithFacebook() {
  //   this.auth.facebook()
  //   .then(results => {
  //     this.registrationSuccess(results, 'facebook')
  //   })
  //   .catch(error => this.handleError(error))
  //   .catch(err => this.handleError(err))
  // }

  // registerWithGithub() {
  //   this.auth.github()
  //   .then(results => {
  //     this.userService.createUserFromGithub(results)
  //     .then(ref => {
  //       this.registrationSuccess(results, 'github')
  //     })
  //     .catch(error => this.handleError(error))
  //   })
  //   .catch(err => this.handleError(err))
  // }

  // registerWithTwitter() {
  //   this.auth.twitter()
  //   .then(results => {
  //     this.registrationSuccess(results, 'twitter')
  //   })
  //   .catch(err => this.handleError(err))
  // }



}
