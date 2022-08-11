import { Component, Input, OnInit } from '@angular/core';
// import {
//   IPayPalConfig,
//   ICreateOrderRequest
// } from 'ngx-paypal';

@Component({
  selector: 'tna-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  @Input() type: 'PAYPAL'|'STRIPE'|'CRYPTO'| string = 'PAYPAL';
  // @Input() config?: IPayPalConfig;
  constructor() { }

  ngOnInit(): void {
  }

  private initConfig() {
    // this.config
  }

}
