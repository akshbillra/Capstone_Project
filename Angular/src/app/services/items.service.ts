import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  server_id = "https://aksh-api-restaurent.herokuapp.com";

  getItems():Observable<any> {
    return this.http.get<any>(this.server_id+'/items');
  }

  getItem(id:any):Observable<any> {
    return this.http.get<any>(this.server_id+'/items/'+id);
  }

  uploadpic(data: any): Observable<any> {
    return this.http.post<any>(this.server_id+'/items/upload', data);
  }

  registerItem(data: any): Observable<any> {
    return this.http.post<any>(this.server_id+'/items/', data);
  }

  updateItem(id:any,data: any): Observable<any> {
    return this.http.put<any>(this.server_id+'/items/'+id, data);
  }


  delItem(id:any):Observable<any> {
    return this.http.delete<any>(this.server_id+'/items/'+id);
  }

  constructor(private http: HttpClient) { }
}

