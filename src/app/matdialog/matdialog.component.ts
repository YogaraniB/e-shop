import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.css']
})
export class MatdialogComponent  implements OnInit {
  userDisplayName = '';
  //userDisplayAdd='';
  userDisplayEmail='';
  userDisplayPhone='';
  //userDisplayAdd1='';
  constructor(
    public dialogRef: MatDialogRef<MatdialogComponent>) { }
   
    close(): void {
    this.dialogRef.close();
    }
    ngOnInit() {
      this.userDisplayName = localStorage.getItem('token');
      this.userDisplayEmail = localStorage.getItem('email');
      this.userDisplayPhone = localStorage.getItem('phoneno');
      //this.userDisplayAdd = localStorage.getItem('address.doorNo');
      //this.userDisplayAdd1 = localStorage.getItem('address.street');
    }
   }