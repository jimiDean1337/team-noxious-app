import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tna-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public breadcrumb = {
    pageTitle: 'About Us',
    currentLocation: 'About Us',
    pageDescription: 'About Team Noxious Academy, online learning platform.',
    imgSrc: 'assets/images/hero/tna-about.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
