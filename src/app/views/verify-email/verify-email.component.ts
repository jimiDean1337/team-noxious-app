import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tna-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  public content?: any = {
    pageDescription: `Don't quit now, you're almost at the finish line!`,
    pageTitle: `Verify Email`,
    currentLocation: `Verify Email`,
    email: 'test@email.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
