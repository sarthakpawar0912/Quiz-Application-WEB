import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/user-storage.service';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) {}

getAlltest(): Observable<any> {
console.log('Fetching tests from:', `${BASIC_URL}/api/test`);
return this.http.get(`${BASIC_URL}/api/test`);
}

getTestQuestions(id: number): Observable<any> {
return this.http.get(`${BASIC_URL}/api/test/${id}`);
}

submitTest(data: any): Observable<any> {
  console.log("📡 Sending Request to API:", data);
  return this.http.post(`${BASIC_URL}/api/test/submit-test`, data);
}
getMyTestResults(): Observable<any> {
const userId = this.userStorageService.getUserId();
return this.http.get(`${BASIC_URL}/api/test/test-result/${userId}`);
}

}
