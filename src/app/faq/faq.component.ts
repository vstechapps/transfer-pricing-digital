import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {

  questions=questions;

  constructor() { }

  ngOnInit(): void {
  }

}

export const questions=[
  { q:"What is Transfer Pricing?" , a:"Transfer pricing is an accounting practice that represents the price that one division in a company charges another division for goods and services provided"},
  { q:"Does your company need Transfer Pricing?" , a:"Transfer pricing is an accounting practice that represents the price that one division in a company charges another division for goods and services provided"},
  { q:"Who will perform Benchmarking analysis?" , a:"Transfer pricing is an accounting practice that represents the price that one division in a company charges another division for goods and services provided"}
];
