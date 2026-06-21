import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private apiUrl =
  'https://aurex-api-1.onrender.com/api/coupons';

  constructor(private http: HttpClient) {}

  getCoupons(){
    return this.http.get(this.apiUrl);
  }

  addCoupon(data:any){
    return this.http.post(this.apiUrl,data);
  }

  deleteCoupon(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}