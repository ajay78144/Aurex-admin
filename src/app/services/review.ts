import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl =
  'https://aurex-api-1.onrender.com/api/reviews';

  constructor(
    private http: HttpClient
  ) {}

  getReviews(){
    return this.http.get(this.apiUrl);
  }

  deleteReview(id:string){
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }

}