import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher, RepeatPasswordValidator } from 'src/app/_helper/validator';
import { TutorSignup } from '../../model/tutorSignupModel';
import { TutorSignupService } from '../../service/signup-service/tutor-signup/tutor-signup.service';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.component.html',
  styleUrls: ['./tutor-signup.component.scss']
})
export class TutorSignupComponent implements OnInit {
  tutorSignup: TutorSignup = new TutorSignup;
  hide = true;
  form: FormGroup;
  passwordsMatcher = new RepeatPasswordEStateMatcher();


  constructor(private tutorSignupService: TutorSignupService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
    this.setupValidations();
  }
  signupAsTutor() {
    this.tutorSignupService.postTutor(this.tutorSignup).subscribe(
      res => {
        this.router.navigateByUrl('tutor-login');
      }, err => {
        if (err.status === 422) {
          console.log(err)
        }
      })
  }
  signupAsStudent() {
    this.router.navigate(['/']);
  }
  login() {
    this.router.navigateByUrl('tutor-login')
  }
  setupValidations() {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', EmailValidation),
      password: new FormControl('', PasswordValidation),
      confirmPassword: new FormControl(''),
    }, { validator: RepeatPasswordValidator });
  }
}
