import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TutorLoginComponent } from './components/login-page/tutor-login/tutor-login.component';
import { StudentLoginComponent } from './components/login-page/student-login/student-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentSignupComponent } from './components/signup-page/student-signup/student-signup.component';
import { TutorSignupComponent } from './components/signup-page/tutor-signup/tutor-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorLoginComponent,
    StudentLoginComponent,
    HomePageComponent,
    StudentSignupComponent,
    TutorSignupComponent
  ],
  imports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
