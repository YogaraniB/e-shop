import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userDisplayName = '';
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('token');
  }
  

}
