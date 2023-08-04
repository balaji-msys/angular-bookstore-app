import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TrendingBooksComponent } from './pages/trending-books-page/trending-books.component';
import { BestOffersBooksPageComponent } from './pages/best-offers-books-page/best-offers-books-page.component';
import { ViewallBooksPageComponent } from './pages/viewall-books-page/viewall-books-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'signin', component: SigninComponent },
  { path: 'details', component: DetailPageComponent },
  { path: 'cart', component: CartPageComponent },
  {path:'Avaliable Books',component:ViewallBooksPageComponent},
  {path:'Trending',component:TrendingBooksComponent},
  {path:'Best Offers',component:BestOffersBooksPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
