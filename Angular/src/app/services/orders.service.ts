import { Injectable, KeyValueDifferFactory } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  registerOrder(data: any): Observable<any>{
    return this.http.post<any>('https://aksh-api-restaurent.herokuapp.com/orders/', data);
  }


  getOrders():Observable<any> {
    return this.http.get<any>('https://aksh-api-restaurent.herokuapp.com/orders');
  }

  delOrder(id:any):Observable<any> {
    return this.http.delete<any>('https://aksh-api-restaurent.herokuapp.com/orders/'+id);
  }

  constructor(private http: HttpClient) { }
}
