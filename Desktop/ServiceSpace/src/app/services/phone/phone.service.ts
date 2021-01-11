import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }
  user : any; 

  private baseUrl = 'http://localhost:8081/phone';

  getPhoneById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }
  
  createPhone(phone: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, phone);
  }

  updatePhone(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  delphone(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  getAllPhone(): Observable<any> {
    const clicks = sessionStorage.getItem('clickCounter');
    console.log(clicks);
    return this.http.get(`${this.baseUrl}/all`);
  }
}
