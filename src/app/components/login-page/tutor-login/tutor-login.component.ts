import { Component, OnInit } from '@angular/core';
import { TutorSignup, TutorLogin } from '../../model/tutorSignupModel';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RepeatPasswordEStateMatcher, EmailValidation, PasswordValidation } from 'src/app/_helper/validator';
import { TutorSignupService } from '../../service/signup-service/tutor-signup/tutor-signup.service';
import { Router } from '@angular/router';
import { TutorLoginService } from '../../service/login-service/tutor-login/tutor-login.service';

@Component({
  selector: 'app-tutor-login',
  templateUrl: './tutor-login.component.html',
  styleUrls: ['./tutor-login.component.scss']
})
export class TutorLoginComponent implements OnInit {
  tutorlogin: TutorLogin = new TutorLogin;
  hide = true;
  form: FormGroup;
  passwordsMatcher = new RepeatPasswordEStateMatcher();


  constructor(private tutorLoginService: TutorLoginService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.setupValidations();
  }
  loginAsTutor() {
    this.tutorLoginService.login(this.tutorlogin).subscribe(
      res => {
        this.router.navigateByUrl('home');
      }, err => {
        if (err.status === 422) {
        }
      })
  }
  loginAsStudent() {
    this.router.navigate(['student-login']);
  }
  createAccount() {
    this.router.navigateByUrl('tutor-signup')
  }
  setupValidations() {
    this.form = this.formBuilder.group({
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),

    })
  }

}
