<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BooksCategoryComponent } from 'src/app/components/books-category/books-category.component';
import { CategoryComponentComponent } from 'src/app/components/books-category/category-component/category-component.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { httpService } from 'src/app/services/http.service';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
        imports: [HttpClientModule,NgbModule, SlickCarouselModule,  RouterTestingModule],
      declarations: [LandingPageComponent,CarouselComponent,BooksCategoryComponent,CategoryComponentComponent],
      providers:[ httpService ]
=======
      declarations: [LandingPageComponent]
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
    });
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

it('should render carousel component and category component',()=>{
   const  compile=fixture.nativeElement
   const carousel=compile.querySelector('app-carousel');
   const booksCategory=compile.querySelector('app-books-category');
   expect(carousel).toBeTruthy();
   expect(booksCategory).toBeTruthy();
})

=======
>>>>>>> 8cc4c8c129ba1de5c96a35f549f9a95e6dc139c6
});
