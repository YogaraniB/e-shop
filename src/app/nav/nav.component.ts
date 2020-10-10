
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
;
import { MatdialogComponent } from '../matdialog/matdialog.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userDisplayName = '';
  simpleDialog: MatDialogRef<MatdialogComponent>;
  constructor(private router: Router,public authService: AuthService,private matDialog: MatDialog) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('token');
  }
  dialog() {
    this.simpleDialog = this.matDialog.open(MatdialogComponent);
    }
  
}


