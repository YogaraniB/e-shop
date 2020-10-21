import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
 // quantity: number;
  quantity = 0;
  total:number;
  sum: 0;
  
  constructor(private cartService: CartService,private router: Router,private snackBar: MatSnackBar) {
    this.items = this.cartService.getItems();
   }

   incrementQuantity() {
    this.quantity = this.quantity + 1;
    }
  

  decrementQuantity() {
    if (this.quantity!=0) {
      this.quantity= this.quantity - 1;
    }
  }
 
  

  ngOnInit(): void {

  }
  openSnackbar(message, action) {
    this.snackBar.open(message, action);
    //this.router.navigate(['/home']);

  }

}
