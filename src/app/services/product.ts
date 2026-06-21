import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://aurex-api-1.onrender.com/api/products';

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get(this.apiUrl);
  }

  getProductById(id:string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createProduct(data:any){
    return this.http.post(this.apiUrl,data);
  }

  updateProduct(id:string,data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  deleteProduct(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}