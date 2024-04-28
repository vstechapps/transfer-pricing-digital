import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-cards',
  templateUrl: './section-cards.component.html',
  styleUrls: ['./section-cards.component.less']
})
export class SectionCardsComponent implements OnInit {

  cards:any[]=[];
  constructor() {
    this.cards.push({image:"https://www.shutterstock.com/image-vector/company-icon-vector-isolated-on-600nw-1160051578.jpg",head:"Are you company",content:"",action:"Get Started",route:"/register/company"});
    this.cards.push({image:"https://static.vecteezy.com/system/resources/thumbnails/005/422/750/small/seo-consultant-icon-free-vector.jpg",head:"Are you consultant",content:"",action:"Get Started",route:"/register/consultant"});
    this.cards.push({image:"https://www.svgrepo.com/show/421200/business-consultant-consulting.svg",head:"Talk to our Team",content:"",action:"Get Started",route:"/contact-us"});
   }

  ngOnInit(): void {
  }

}
