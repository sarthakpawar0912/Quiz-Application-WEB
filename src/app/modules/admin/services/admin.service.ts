import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  createTest(testDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `/api/test`, testDto);
  }
  
  getAllTest(): Observable<any> {
    return this.http.get(BASIC_URL + `/api/test`);
  }

  getTestById(testId: number): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/test/${testId}`);
  }
  
  getTestResults(): Observable<any> {
    return this.http.get(`${BASIC_URL}/api/test/test-result`);
  }

  addQuestionInTest(questionDto: any ):Observable<any>{
    return this.http.post(BASIC_URL+`/api/test/question`,questionDto);
  }
  
}


