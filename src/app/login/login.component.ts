import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import{ HttpClient} from  '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserService } from "../service/user.service";
import { data } from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userid:any;
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  submitted:boolean;
  invalidLogin:boolean;
  constructor(private formBuilder: FormBuilder,private router: Router,public authService: AuthService,private userService: UserService, private http:HttpClient) { }

  ngOnInit() 
   {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
     
      password: ['', Validators.required]
      
    });
    this.returnUrl = '/main';

   }
  get f()
   { 
    return this.loginForm.controls; 
    
  }
  getUser(){
    return this.userid;
  }
  login()
   {
     debugger;
    if (this.loginForm.invalid)
     {
        return;
     }
    else
    {
    this.userService.getUser(this.f.userid.value).subscribe(data=> {
      console.log(JSON.stringify(data));
      debugger;
       const userdetail=userArray.filter((user)=>user.userid==this.f.userid.value);
       console.log(JSON.stringify(userdetail));
       console.log(userdetail[0].password==this.f.password.value);
      if(userdetail[0].userid==this.f.userid.value)
      {
        localStorage.setItem('userid',this.f.userid.value);  
        localStorage.setItem('password',this.f.password.value);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else
      {
        this.message = "Please! check your userid and password";
      } 
     
     },
    )
  }
}
}


  export const userArray= [
    {
      "userid": 1,
      "username": "Surya ",
      "password": "surya" ,
      "address": {
        "doorNo": 11,
        "street": "xyz"
      } 
      
    },
    {
      "userid": 2,
      "username": "Matheswari ",
      "password": "123",  
      "address": {
        "doorNo": 12,
        "street": "abc"
      }
      
    },
    {
      "userid": 3,
      "username": "Rajamaheswari ",
      "password": "mahi123", 
      "address": {
        "doorNo": 13,
        "street": "efg"
      }
      
    }
   
  ]
