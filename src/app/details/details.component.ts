import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../details';
import { CartService } from '../cart.service';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
details;
  constructor(private route: ActivatedRoute,private cartService: CartService,private snackBar: MatSnackBar) { }

  addToCart(details,message,action) {
    this.snackBar.open(message,action);
    this.cartService.addToCart(details);
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.details = Details[+params.get('id')];
 });
  }

}
