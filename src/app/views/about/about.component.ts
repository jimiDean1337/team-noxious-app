import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tna-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  heroBackgroundImgSrc: string = 'assets/images/hero/tna-about.png';
  constructor() { }

  ngOnInit(): void {
  }

}
