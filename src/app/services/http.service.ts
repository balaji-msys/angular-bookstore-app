// this http service is used to get the json data have 3 methodes for getting json data  from url
//getBooks() will return all books but need to subscribe when using
//getTrendingBooks() will return all books but need to subscribe when using
//getOfferBooks() will return all books but need to subscribe when using

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookQty } from 'app/interface.book';
import { cartState } from 'app/interfaces/interface.cartState';
import { map } from 'rxjs';
import { Book } from '../interfaces/interface.book';
// import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class HttpService
{
  cartItems: any;
  constructor (private store: Store<{ cartItems: cartState }>, private http: HttpClient)
  {

    this.store.select('cartItems').subscribe(data =>
      this.cartItems = data.cartItems[0]
    )
  }

  //getBooks() will return all books but need to subscribe when using
  getBooks()
  {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  //getTrendingBooks() will return all books but need to subscribe when using
  getTrendingBooks()
  {
    return this.http.get<Book[]>('http://localhost:3000/books').pipe(
      map((Resp) =>
      {
        const dataArray:any = [];
        for (const data of Resp) {
          if (data.categories.includes('Trending')) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      })
    );
  }

  //getOfferBooks() will return all books but need to subscribe when using
  getBestOffersBooks()
  {
    return this.http.get<Book[]>('http://localhost:3000/books').pipe(
      map((Resp) =>
      {
        const dataArray: any = [];
        for (const data of Resp) {
          if (data.discount) {
            dataArray.push({ ...data });
          }
        }
        return dataArray;
      })
    );
  }
  addCartItems(data: any)
  {
    return this.http.post('http://localhost:3000/cartItems', data)
  }
  getCartItems()
  {
    return this.http.get<Book[]>('http://localhost:3000/cartItems').pipe(
      map((Resp) =>
      {
        return Resp;
      }));

  }
  removeCartItems(id: number)
  {
    return this.http.delete(`http://localhost:3000/cartItems/${id}`)
  }

  incrementCartItems(item: any)
  {
    let currentQuantity = item.quantity;

      let incitem: BookQty = { ...item, quantity: currentQuantity + 1 };

    return this.http.put(`http://localhost:3000/cartItems/${item.id}`, incitem);
  }
  decrementCartItems(item: any)
  {
    let currentQuantity = item.quantity;

    let incitem: BookQty = { ...item, quantity: currentQuantity - 1 };

    return this.http.put(`http://localhost:3000/cartItems/${item.id}`, incitem);
  }
 
}
