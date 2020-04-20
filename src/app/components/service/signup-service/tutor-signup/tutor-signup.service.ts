import { Injectable } from '@angular/core';
import { TutorSignup } from 'src/app/components/model/tutorSignupModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../tokenService/token.service';
import { map } from 'rxjs/operators';

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class TutorSignupService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }
  
  postTutor(tutor: TutorSignup){
    return this.http.post('http://localhost:4000/api'+'/register',tutor,this.noAuthHeader)
    
  }  
 
}
