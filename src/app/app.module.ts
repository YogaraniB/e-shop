import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { SliderComponent } from './slider/slider.component';
import { CartComponent } from './cart/cart.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './kids/kids.component';
import { MainComponent } from './main/main.component';
import { NextComponent } from './next/next.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/shared.module';
export const routes : Routes= [
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
 
 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    SliderComponent,
    CartComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    MainComponent,
    NextComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,SharedModule,
    AppRoutingModule,MaterialModule,
    NgImageSliderModule,
    BrowserAnimationsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
