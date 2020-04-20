import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/tokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private token:TokenService) { }

  ngOnInit() {
  }
  toHome(){
    this.router.navigateByUrl('/');
  }
  toAbout(){
    this.router.navigateByUrl('about');
  }
  toContact(){
    this.router.navigateByUrl('contact');
  }
  toProfile(){
    this.router.navigateByUrl('profile');
  }
  toTutorLogin(){
    this.router.navigateByUrl('tutor-login');
  }
  toTutorSignup(){
    this.router.navigateByUrl('tutor-signup');
  }
  isUserLoggedIn() {
    return this.token.isLoggedIn();
  }
  toLogout(){
    this.token.removeToken();
    this.router.navigateByUrl('tutor-signup');
  }

}
