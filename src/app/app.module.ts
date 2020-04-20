import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TutorLoginComponent } from './components/login-page/tutor-login/tutor-login.component';
import { StudentLoginComponent } from './components/login-page/student-login/student-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StudentSignupComponent } from './components/signup-page/student-signup/student-signup.component';
import { TutorSignupComponent } from './components/signup-page/tutor-signup/tutor-signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  AuthGuardService as AuthGuard
} from './components/service/guards/authGuard';
import { ErrorInterceptor } from './_helper/error.interceptors';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { TutorprofileComponent } from './components/tutorprofile/tutorprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorLoginComponent,
    StudentLoginComponent,
    HomePageComponent,
    StudentSignupComponent,
    TutorSignupComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TutorprofileComponent
  ],
  imports: [
    MaterialModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
