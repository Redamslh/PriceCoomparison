import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ElectService {

  user : any; 

  private baseUrla = 'http://localhost:8080/elect/';


  constructor(private http: HttpClient) { }

  getElectById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/elect/id/'+ id );
  }

  createElect(elect: Object): Observable<Object> {
    return this.http.post(`${this.baseUrla}/save`, elect);
  }

  updateElect(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrla}/update/${id}`, value);
  }

  delelect(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/elect/'+ id );
  }

  getAllElect(): Observable<any> {
    const clicks = sessionStorage.getItem('clickCounter');
    console.log(clicks);
    return this.http.get(`${this.baseUrla}/all`);
  }
}
