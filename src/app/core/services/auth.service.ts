import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { Observable, switchMap, tap } from 'rxjs';
import {DataService} from './data.service';
import { NotificationsService } from './notifications.service';
import { UserService } from './user.service';
// import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Auth?: Observable<firebase.User | null>;

  constructor(
    public auth: AngularFireAuth,
    private cookie: CookieService,
    private notifications: NotificationsService,
    private dataService: DataService,
    private userService: UserService,
    ) { }

  private get authState() {
    return this.Auth = this.auth.authState;
  }

  public async deleteUserAuth() {
    try {
      const user = await this.auth.currentUser;
      return user?.delete();
    } catch (err) {
      return new Error("Could not delete user auth: " + `${err}`);
    }
  }

  public get getUserAuth(): Observable<firebase.User | null> {
    return this.auth.authState;
  }

  public google(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  public email(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  public register(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, pass);
  }

  public passwordReset(email: string) {
    return this.userService.resetPassword(email)
    .pipe(tap(result => {
      if (result) {
        this.notifications.success(`Yes! A password reset link has been sent to ${email}.`)
      } else {
        this.notifications.error(`Oops! Cannot find an account linked to ${email}. Please, try again.`)
      }
    }))

  }

  /* TODO: Finish Recaptcha Setup
  public validateRecaptcha(token: string, options?: any) {

  } */

  public async signOut() {
    try {
      await this.auth.signOut()
      this.cookie.delete('_tna_USER_ID');
    } catch(err) {
      console.log('Error on SignOut', err);
      throw new Error('Could not SignOut')
    }

  }
}
