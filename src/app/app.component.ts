import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'tna-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'team-noxious-app';

  constructor() {}



  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true
    })

    window.addEventListener('DOMContentLoaded', (e) => {
      setTimeout(fadeOut, 500);
    })

    const fadeOut = () => {
      document.querySelector('preloader')?.animate({
        opacity: 0,
        display: 'none',
      })
    }

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
      navbarToggler.classList.add('active');
    })

  }
}
