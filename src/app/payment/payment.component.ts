import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router , private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackbar(message,action){
    this.snackBar.open(message,action);
   // window.alert('Payment Successfully!!');
    this.router.navigate(['/pdf']);
  }
 
}
