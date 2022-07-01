import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from '@firebase/util';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {
  constructor(private userService: UserService, private cookie: CookieService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.cookie.check('_tna_USER_ID')) {
      const uid = this.cookie.get('_tna_USER_ID')
      return this.userService.getUserById(uid).valueChanges()
    } else {
      return of(false);
    }

  }
}
