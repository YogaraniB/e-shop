import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string;
  productsData: any;
  userDisplayName = '';
  constructor(private router: Router,public authService: AuthService,private httpClient: HttpClient,
    private jsonService: JsonService) { }

  ngOnInit() {
    this.userDisplayName = localStorage.getItem('token');
    this.id = localStorage.getItem('token');
    this.jsonService.getData().subscribe((data)=>
      this.productsData = data
    )
   
  }
  }

  /*
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
*/

