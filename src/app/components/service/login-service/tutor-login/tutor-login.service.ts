import { Injectable } from '@angular/core';
import { TokenService } from '../../tokenService/token.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TutorLogin } from 'src/app/components/model/tutorSignupModel';

interface TokenResponse {
  token: string;
}

export interface ITutorLogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class TutorLoginService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient,private token:TokenService,) { }
  login(tutor:TutorLogin){
    return this.http.post('http://localhost:4000/api'+'/authenticate',tutor,this.noAuthHeader).pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.token.saveToken(data.token);
        }
        return data;
      })
    );

    }
    
}
