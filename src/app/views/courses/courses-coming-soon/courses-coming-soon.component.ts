import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tna-courses-coming-soon',
  templateUrl: './courses-coming-soon.component.html',
  styleUrls: ['./courses-coming-soon.component.scss']
})
export class CoursesComingSoonComponent implements OnInit {
  breadcrumb: any = {
    pageTitle: 'Courses - Coming Soon',
    currentLocation: 'Courses',
    pageDescription: 'COMING SOON: Team Noxious Academy Courses on a variety of topics, created by experienced professionals, and are 100% free.',
    imgSrc: 'assets/images/hero/tna-courses.jpg'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
