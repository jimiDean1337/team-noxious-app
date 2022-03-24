import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
// import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private cookie: CookieService) { }

  public get getUserAuth(): Observable<firebase.User | null> {
    return this.auth.authState;
  }

  public google(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  // public facebook(): Promise<firebase.auth.UserCredential> {
  //   return this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  // }

  // public twitter(): Promise<firebase.auth.UserCredential> {
  //   return this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
  // }

  // public github(): Promise<firebase.auth.UserCredential> {
  //   return this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
  // }

  public email(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, pass);
  }

  public register(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, pass);
  }

  public async signOut() {
    return await this.auth.signOut()
    .then(res => {
      this.cookie.delete('USER_ID');
    });
  }
}
