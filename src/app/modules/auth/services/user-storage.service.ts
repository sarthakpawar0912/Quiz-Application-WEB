import { Injectable } from '@angular/core';

const USER = 'q_user';


@Injectable({
  providedIn: 'root'
})

export class UserStorageService {
  
  constructor() {}


  saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }


  getUser(): any {
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }
  
  getUserId(): string {
    return this.getUser()?.id || '';
  }


  getUserRole(): string {
    return this.getUser()?.role || '';
  }


  isAdminLoggedIn(): boolean {
    return this.getUserRole() === 'ADMIN';
  }


  isUserLoggedIn(): boolean {
    return this.getUserRole() === 'USER';
  }


  signOut(): void {
    window.localStorage.removeItem(USER);
  }

}