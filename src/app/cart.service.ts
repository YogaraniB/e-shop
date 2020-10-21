import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total:number;
  sum: 0;
  quantity = 0;

   addToCart(details){
     this.items.push(details);
   }
   getItems(){
     return this.items;
   }
  
   clearCart(){
    this.items = [];
    return this.items
  
  }
  constructor(private http: HttpClient) { }
}
