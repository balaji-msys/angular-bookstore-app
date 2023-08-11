import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SignupComponent } from './pages/signup-page/signup.component';
import { SigninComponent } from './pages/signin-page/signin.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ViewallBooksPageComponent } from './pages/viewall-books-page/viewall-books-page.component';
import { OrderSuccessPageComponent } from './pages/order-success-page/order-success-page.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full",canActivate:[AuthService] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'details/:id', component: DetailPageComponent},
  { path: 'cart', component: CartPageComponent },
  { path: 'viewall/:category', component: ViewallBooksPageComponent },
  {path:'buy',component:OrderSuccessPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
