import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import * as AOS from 'aos';
import { filter, Observable, tap } from 'rxjs';
import { AuthService } from './core/services/auth.service';
@Component({
  selector: 'tna-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Team Noxious';
  loading = false;
  showMobileMenu = false;
  navStart: any;
  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  public signOut() {
    return this.authService.signOut()
    .then((result: any) => {
      this.router.navigateByUrl('/login')
    })
  }

  public get loggedIn() {
    return this.authService.getUserAuth;
  }

  public getAuthState() {
    return this.loggedIn;
  }

  public toggleMobileNav() {
    this.showMobileMenu = !this.showMobileMenu;
  }

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
    this.getAuthState().pipe(
      tap(user => {console.log(user)})
    );

    this.navStart.subscribe(() => {
      this.loading = true;
      this.scrollToTop()
      setTimeout(() => {
        this.loading = false;
      }, 1200)
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
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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

    const navbarToggler = document.querySelector('.mobile-menu-btn');
    navbarToggler?.addEventListener('click', e => {
      navbarToggler.classList.toggle('active');
    })

  }
}
