import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LoginData, RegData, ResponseData } from './datatype';
import { pbkdf2 } from 'crypto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'/*,'accept': 'application/json' */})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL={
    user:'https://pc2.tfcis.org/dev/api.php/user',
    login:'/login',
    register:'/register',
    logout: '/logout'
  };
  response;

  constructor( private http: HttpClient ) { }

  userLogin(data: LoginData ): number {
    this.http.post(this.URL['user']+this.URL['login'], data)
    .subscribe(
      async res=>{
        //console.log(res);
        this.response= res.code;
      },
      async error => {
        //console.log(error.error.code);
        this.response= error.error.code;
      }
    );
    return this.response;
  }
  userRegister(data: RegData): number{

    this.http.post(this.URL['user']+this.URL['register'], data)
    .subscribe(
      async res=>{
        //console.log(res);
        this.response= res.code;
      },
      async error => {
        //console.log(error.error.code);
        this.response= error.error.code;
      }
    );
    return this.response;
  }
  testRemote():void{
    console.log("remote test");
    this.http.get('https://pc2.tfcis.org/dev/api.php/ping?text=a').subscribe(data=>console.log(data));
  }
}
