import { Component, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import * as AOS from 'aos';
import { filter, Observable, tap } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { NotificationsService } from './core/services/notifications.service';
import { map } from 'rxjs/operators';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'tna-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent) private navbarComponent!: NavbarComponent;
  title = 'Team Noxious Academy';
  loading = false;
  navStart: any;
  isLoggedIn: any;
  showToTopBtn: boolean = true;

  constructor(private http: HttpClient, private cookie: CookieService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private notifications: NotificationsService) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  public signOut() {
    return this.authService.signOut()
    .then((result: any) => {
      this.notifications.success('You are now signed out!', 'Success')
      this.router.navigateByUrl('/login')
    })
  }

  // public get loggedIn() {
  //   return this.authService.getUserAuth;
  // }

  // public getAuthState() {
  //   return this.loggedIn;
  // }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true
    })

    this.cookie.set('PHPSESSID', 'fcKNd1p5h1t1337h4xx0r')
    // Get auth state if it exists
    // this.getAuthState()
    // .pipe(
    //   tap(user => {
    //     console.log(user)
    //   })
    // );

    this.navStart.subscribe((e: any) => {
      let location = e;
      console.log('location', location)
      let loadTime = location.url.includes('home') ? 3500 : 1250;
      this.loading = true;
      this.navbarComponent.showMobileMenu = false;
      console.log('Navbar Closed', this.navbarComponent)
      this.scrollToTop()
      setTimeout(() => {
        this.loading = false;
      }, loadTime)
    })

    window.onscroll = (ev: any) => {
      const header_navbar: any = document.querySelector('.navbar-area');
      const sticky: any = header_navbar?.offsetTop + 400;

      if(window.pageYOffset > sticky) {
        header_navbar.classList.add('sticky');
      } else {
        header_navbar.classList.remove('sticky')
      }

      const backToTop: any = document.querySelector('.scroll-top');
      const currentLocation = location.href;
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 && !currentLocation.includes('registration') && !currentLocation.includes('login')) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = "none";
      }
    }

    const pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
      elem.addEventListener('click', e => {
        e.preventDefault();
        const el: any = elem.getAttribute('href')?.slice(1);
        document.querySelector(el)?.scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }
}
