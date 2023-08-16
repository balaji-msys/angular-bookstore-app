import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { httpService } from 'src/app/services/http.service';
import { Book } from 'src/app/interfaces/interface.book';

@Component({
  selector: 'app-viewall-books-page',
  templateUrl: './viewall-books-page.component.html',
  styleUrls: ['./viewall-books-page.component.css'],
})
export class ViewallBooksPageComponent
{
  allBooks: Book[] = [];
  category: string = '';
  cols: number = 4;
<<<<<<<< HEAD:src/app/components/viewall-books-page/viewall-books-page.component.ts

========
  books:any ;
  search:string= '';
  
>>>>>>>> 69d2bac4e13581498583fcf4f64b242649365daf:src/app/pages/viewall-books-page/viewall-books-page.component.ts
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any)
  {
    this.cols = this.getRows();
  }

  constructor (
    private activeRoute: ActivatedRoute,
    private http: httpService,
    private navpage: Router
<<<<<<<< HEAD:src/app/components/viewall-books-page/viewall-books-page.component.ts
  ) { }
========
    
  ) {}
>>>>>>>> 69d2bac4e13581498583fcf4f64b242649365daf:src/app/pages/viewall-books-page/viewall-books-page.component.ts

  ngOnInit()
  {
    this.category = this.activeRoute.snapshot.params['category'];
    this.activeRoute.params.subscribe((param) =>
    {

      if (param['category'] === 'Trending') {
        this.http
          .getTrendingBooks()
          .subscribe((resp) => (this.allBooks = resp));
      } else if (param['category'] === 'Best Offers') {
        this.http
          .getBestOffersBooks()
          .subscribe((resp) => (this.allBooks = resp));
      } else {
        this.http.getBooks().subscribe((resp) => (this.allBooks = resp));
      }
    });

  }
  calculateDiscount(price: number, discount: number)
  {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice;
  }
  getRows()
  {
    if (window.innerWidth > 1000) {
      return 4;
    } else if (window.innerWidth < 1000 && window.innerWidth > 768) {
      return 3;
    } else if (window.innerWidth < 768 && window.innerWidth > 576) {
      return 2;
    } else if (window.innerWidth < 576 && window.innerWidth > 500) {
      return 2;
    } else {
      return 1;
    }
  }
  navigateToDetails(id: number) {
<<<<<<<< HEAD:src/app/components/viewall-books-page/viewall-books-page.component.ts
    this.navpage.navigate(['details', id]);
========
    this.navpage.navigate(["details",id] );
  
  
>>>>>>>> 69d2bac4e13581498583fcf4f64b242649365daf:src/app/pages/viewall-books-page/viewall-books-page.component.ts
  }
}
