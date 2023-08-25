import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currertimage='../assets/images/scrolling images/abstract-1851073_1920.jpg'
 constructor(private route:Router){
  this.route.events.subscribe((e)=>{
    
    if(e instanceof NavigationEnd){
      if(e.url.includes('cart')){
        this.currertimage='../assets/images/scrolling images/books-1617327_1920.jpg'
      }
      else if(e.url.includes('viewall')){
        this.currertimage='../assets/images/scrolling images/open-163976_1920.jpg'
      }
      else if(e.url.includes('details')){
        this.currertimage='../assets/images/scrolling images/fantasy.jpg'
      }
      else{
      console.log(e.url)
        this.currertimage='../assets/images/scrolling images/library1.jpg'
      }
    }
  })
 }
 getImage(){
  return `url('${this.currertimage}')`;
 }
}
