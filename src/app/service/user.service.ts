import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  user=new Subject<User>();
  
  constructor(private httpClient:HttpClient) { }

  addUser(user: User){
    console.log(user);
    let url='http://localhost:9091/users';
    return this.httpClient.post<User>(url,user);
  }

  getAllUser():Observable<any>{
    let url='http://localhost:9091/users';
    return this.httpClient.get<User[]>(url);
  }

  getUserById(userId: number):Observable<any> {
    let url = `http://localhost:9091/users/${userId}`;
    return this.httpClient.get<User>(url);
  }

}
