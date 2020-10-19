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
  quantity: number;
  
  constructor(private cartService: CartService,private router: Router,private snackBar: MatSnackBar) {
    this.items = this.cartService.getItems();
   }

  ngOnInit(): void {
  }
  openSnackbar(message, action) {
    this.snackBar.open(message, action);
    //this.router.navigate(['/home']);

  }

}
