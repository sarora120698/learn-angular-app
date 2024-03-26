import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
