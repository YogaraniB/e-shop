
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

}

getUser(userid): Observable<any>{
  console.log(this.http.get('assets/data/user.json'));
  return this.http.get('assets/data/user.json');
  
}
}
