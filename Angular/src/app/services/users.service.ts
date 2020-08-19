import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

//request to api
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  uploadpic(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/users/upload', data);
  }


  registerUser(data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/users/', data);
  }


  updateUser(id:any,data: any): Observable<any> {
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/users/'+id, data);
  }

  getUser(id:any):Observable<any> {
    return this.http.get<any>('https://aksh-api-restaurent.herokuapp.com/users/single/'+id);
  }

  getAdmin(data:any):Observable<any>{
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/users/admin/',data)
  }

  getUsers():Observable<any> {
    return this.http.get<any>('https://aksh-api-restaurent.herokuapp.com/users');
  }

  delUser(id:any):Observable<any> {
    return this.http.delete<any>('https://aksh-api-restaurent.herokuapp.com/users/'+id);
  }

  constructor( private http: HttpClient) { }
}
