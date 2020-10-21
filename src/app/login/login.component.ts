/*import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import{ HttpClient} from  '@angular/common/http';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = { userid: "Rajamaheswari", password: "mahi123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  submitted:boolean;
  userid:any;
  invalidLogin:boolean;

  constructor(private formBuilder: FormBuilder,private router: Router,public authService: AuthService,private userService: UserService, private http:HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/main';

  }
  get f() { 
    return this.loginForm.controls;   
  }
  getUser(){
    return this.userid;
  }
  login() {
    if (this.loginForm.invalid) {
        return;
    }
    else{
      /////////if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
        alert("You are Successfully LoggedIn!!");
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);/////////////
        this.userService.getUser(this.f.userid.value).subscribe(data=> {
          console.log(JSON.stringify(data))
          debugger;
          if(data.userid==this.f.userid.value)
          {
            localStorage.setItem('userid',this.f.userid.value);
            localStorage.setItem('username',this.f.username.value);
            localStorage.setItem('password',this.f.password.value);
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', this.f.userid.value);
            this.router.navigate([this.returnUrl]);
          }
      else{
        this.message = "Please! check your userid and password";
          }
    },
        )
  }
}
}*/
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import{ HttpClient} from  '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserService } from "../service/user.service";


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
      
      password: ['', Validators.required],
      email: [''],
      phoneno: [''],
<<<<<<< HEAD
      address:[''],
      state:[''],
      city:[''],

=======
      address:['']
>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
      
      
    });
    this.returnUrl = '/home';

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
        localStorage.setItem('email',userdetail[0].email);
        localStorage.setItem('phoneno',userdetail[0].phoneno);
        localStorage.setItem('address',userdetail[0].address);
<<<<<<< HEAD
        localStorage.setItem('city',userdetail[0].city);
        localStorage.setItem('state',userdetail[0].state);
=======
        //localStorage.setItem('address',userdetail[0].address.street);

>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('password',this.f.password.value);
        localStorage.setItem('token', userdetail[0].username);
    
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
export const userArray=
[
 {
  "userid": 1,
  "username": "Surya ",
  "password": "surya" ,
  "email":"suryarajan361@gmail.com",
  "phoneno":"9566572539",
<<<<<<< HEAD
  "address":"5/231,s15 RK nagar" ,
  "city":"Tuticorin",
  "state":"Tamilnadu",
=======
  "address": "abc street, Chennai"  
>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
   
 },
 {
   "userid": 2,
 "username": "Matheswari ",
 "password": "123", 
 "email":"matheswari123.com",
 "phoneno":"9566572565", 
<<<<<<< HEAD
 "address":"5/234,s16 PK nagar" ,
  "city":"Tuticorin",
  "state":"Tamilnadu",
=======
 "address": "xyz street,Coimbatore" 
>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
   
 },
 {
  "userid": 3,
  "username": "Rajamaheswari ",
  "password": "mahi123", 
  "email":"rajamaheshwari@gmail.com",
  "phoneno":"95665654667",
<<<<<<< HEAD
  "address":"5/233,a15 T nagar" ,
  "city":"Sivakasi",
  "state":"Tamilnadu"
=======
  "address": "dfl street, Trichy"
>>>>>>> 172a0aea4c5ec669a9573f5bdfb2d60d502a2d96
   
 },
]
