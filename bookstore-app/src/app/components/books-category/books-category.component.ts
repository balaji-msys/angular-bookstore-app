import { Component, OnInit } from '@angular/core';
import { httpService } from 'src/app/http.service';
import { Book } from 'src/app/interface.book';

@Component({
  selector: 'app-books-category',
  templateUrl: './books-category.component.html',
  styleUrls: ['./books-category.component.css']
})
export class BooksCategoryComponent implements OnInit {
  trendingBooks:Book[]=[];
  bestOfferBooks:Book[]=[];
  allBooks:Book[]=[];
  
  constructor(private httpdata:httpService){}
 
ngOnInit() {
  this.httpdata.oNGetTrendingBooks().subscribe((resp)=>{this.trendingBooks=resp});
  this.httpdata.oNGetBestOffersBooks().subscribe((resp)=>{this.bestOfferBooks=resp});
  this.httpdata.onGetBooks().subscribe((resp)=>{this.allBooks=resp});
  // this.httpdata.onGetBooks().subscribe((resp)=>{
  //   let booksoffer=[]
  //   let trending=[]
  //   for(let data of resp){
  //     if( data.discount){
  //       booksoffer.push({...data})
  //   }
  //   if( data.categories.includes("Trending")){
  //     trending.push({...data})
  // }
  //   this.bestOfferBooks=booksoffer;
  //   this.trendingBooks=trending
  //   this.allBooks=resp;

  //   }
  // })

}

}
