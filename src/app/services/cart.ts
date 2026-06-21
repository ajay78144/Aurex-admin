import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'https://aurex-api-1.onrender.com/api/cart';

  constructor(
    private http: HttpClient
  ) {}

  getCarts() {
    return this.http.get(this.apiUrl);
  }

  getCartById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteCart(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}