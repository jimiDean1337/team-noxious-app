import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { NotificationsService } from '../../core/services/notifications.service';

@Component({
  selector: 'tna-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMobileMenu: boolean = false;
  isLoggedIn: any;
  showToTopBtn: boolean = true;

  constructor(private authService: AuthService, private router: Router, private notifications: NotificationsService) {
  }

  public signOut() {
    return this.authService.signOut()
    .then((result: any) => {
      this.notifications.success('You are now signed out!', 'Success')
      this.router.navigateByUrl('/login')
    })
  }

  public get loggedIn() {
    return this.authService.getUserAuth;
  }

  public getAuthState() {
    return this.loggedIn;
  }


  ngOnInit(): void {
  }

  public toggleMobileNav() {
    this.showMobileMenu = !this.showMobileMenu;
  }

}
