import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { USERS, user } from './fake_users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUser(name: string): Observable< user >{
    return of(USERS.find(function(element){
        return element.id===name;
    }));
  }
}
