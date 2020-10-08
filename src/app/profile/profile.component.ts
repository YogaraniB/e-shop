import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDisplayName = '';
  //userDisplayAdd='';
  userDisplayEmail='';
  userDisplayPhone='';
  //userDisplayAdd1='';
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('token');
    this.userDisplayEmail = localStorage.getItem('email');
    this.userDisplayPhone = localStorage.getItem('phoneno');
    //this.userDisplayAdd = localStorage.getItem('address.doorNo');
    //this.userDisplayAdd1 = localStorage.getItem('address.street');
  }

}
