import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from 'app/core/services/cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { cartState } from 'app/interfaces/interface.cartState';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField:any;
  username: string ='';
  search:any='';
  count = 0;
  constructor(
    private http: HttpClient,
    private cartservice: CartService,
    private router: Router,
    private store: Store<{ cartItems: cartState }>
  ) {

  
  }
  ngOnInit() {
    this.store.select('cartItems').subscribe((data) => {
      this.count = data.cartItems.length;
    });
    const userDetails = localStorage.getItem('userdetails');
    this.search= localStorage.getItem('search');
    if (userDetails) {
      const user = JSON.parse(userDetails);

      this.username = user.name;
    }
  }
  ngAfterViewInit(){
    this.searchField.nativeElement.focus({preventScroll: true})
  }

  redirectToSearch(event: any) {
    localStorage.setItem('search',this.search)
    this.router.navigate(['search', event.target.value]);
  }
  signinPage() {
    this.router.navigate(['signin']);
  }
  logout() {
    let result = confirm('Are you sure you want to Sign Out?');
    if (result) {
      this.router.navigate(['signin']);
      localStorage.removeItem('userdetails');
    }
  }

}
