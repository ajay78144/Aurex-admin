import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private apiUrl = 'https://aurex-api-1.onrender.com/api/banners';

  constructor(
    private http: HttpClient
  ) {}

  getBanners() {
    return this.http.get(this.apiUrl);
  }

  getBannerById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createBanner(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateBanner(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteBanner(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}