import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor() { }

  userLogin(login:any):Observable<boolean>{
    if(login &&
    login.username &&
    login.password){
     const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
   
     return of(sampleJWT).pipe(
     map((token) => {
    if(!token){
      return false;
    }
    localStorage.setItem("access_token", token);
    const decodedUser = this.jwtHelper.decodeToken(token);
    console.log(decodedUser);
    this.userInfo.next(decodedUser);
    return true;
     }));
    }
    return of(false);
  }
}
