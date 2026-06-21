import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl =
  'https://aurex-api-1.onrender.com/api/dashboard';

  constructor(
    private http: HttpClient
  ) {}

  getStats(){
    return this.http.get(this.apiUrl);
  }

}