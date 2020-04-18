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
    ContactComponent
  ],
  imports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
