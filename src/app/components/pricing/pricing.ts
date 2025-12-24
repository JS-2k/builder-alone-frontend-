import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing implements OnInit {
  currency = '₹';
  price = 299;

  ngOnInit() {
    this.detectCurrency();
  }

  detectCurrency() {
    const locale = navigator.language || 'en-IN';
    const country = locale.split('-')[1];
    
    switch(country) {
      case 'US':
        this.currency = '$';
        this.price = 4;
        break;
      case 'GB':
        this.currency = '£';
        this.price = 3;
        break;
      case 'EU':
      case 'DE':
      case 'FR':
        this.currency = '€';
        this.price = 4;
        break;
      default:
        this.currency = '₹';
        this.price = 299;
    }
  }
}
