import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { PaymentComponent } from './payment/payment.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
    
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },

 // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginComponent,pathMatch: 'full'},
  { path:'details/:id',component: DetailsComponent,pathMatch: 'full'},
  { path:'cart',component: CartComponent,pathMatch: 'full'},
  { path:'payment',component: PaymentComponent,pathMatch: 'full'},
<<<<<<< HEAD

  
 
=======
  { path:'pdf',component: PdfComponent,pathMatch: 'full'},
>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,CartService]
})
export class AppRoutingModule { }
