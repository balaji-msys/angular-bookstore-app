import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface.book';
// import { viewallservice } from 'src/app/viewall.data.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css'],
})
export class CategoryComponentComponent {
  @Input() imagesData: Book[]=[];
  @Input() title: string="";
  //   slides!:any;
  // ngOnInit(){
  //   this.slides =this.imagesData;
  //   console.log(this.slides)
  // }
  constructor(private navpage:Router){}

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: '922',
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: '768',
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: '576',
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: '400',
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  calculateDiscount(price: number, discount: number) {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  navigateToDetails(id: number) {
    this.navpage.navigate(["details",id] );
  }

}
