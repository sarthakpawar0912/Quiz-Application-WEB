import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";


@Injectable({
  providedIn: 'root'
})

export class TestService {
 
  constructor(private http: HttpClient) {}

  getAlltest(): Observable<any> {
    console.log('Fetching tests from:', `${BASIC_URL}/api/test`); // Debugging
    return this.http.get(`${BASIC_URL}/api/test`);
  }
  
}
