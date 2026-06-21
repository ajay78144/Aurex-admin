import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'https://aurex-api-1.onrender.com/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(){
    return this.http.get(this.apiUrl);
  }

  createCategory(data:any){
    return this.http.post(this.apiUrl,data);
  }

  updateCategory(id:string,data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  deleteCategory(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCategoryById(id:string){
  return this.http.get(`${this.apiUrl}/${id}`);
}

}