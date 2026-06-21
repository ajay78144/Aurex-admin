import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl =
  'https://aurex-api-1.onrender.com/api/contacts';

  constructor(
    private http: HttpClient
  ) {}

  getContacts(){
    return this.http.get(this.apiUrl);
  }

  deleteContact(id:string){
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }

}