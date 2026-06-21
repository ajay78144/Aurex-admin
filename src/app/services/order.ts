import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'https://aurex-api-1.onrender.com/api/orders';

  constructor(private http: HttpClient) {}

  getOrders(){
    return this.http.get(this.apiUrl);
  }

  getOrderById(id:string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateOrder(id:string,data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  deleteOrder(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}