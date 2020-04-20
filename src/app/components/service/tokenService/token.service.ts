import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TutorSignup } from '../../model/tutorSignupModel';

const TOKEN = 'token';
// const USER_ID = 'userId';
// const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 
  constructor() { }

  isLoggedIn(): boolean {
    const user: string = localStorage.getItem(TOKEN);
    return !(user === null);
  }

  // static getUserId(): string {
  //   return localStorage.getItem(USER_ID);
  // }

 removeToken() {
    localStorage.removeItem(TOKEN);
    // localStorage.removeItem(USER_ID);
    // localStorage.removeItem(USER);
  }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN);
  }

}
