import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

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
  toTutorLogin(){
    this.router.navigateByUrl('tutor-login');
  }
  toTutorSignup(){
    this.router.navigateByUrl('tutor-signup');
  }

}
