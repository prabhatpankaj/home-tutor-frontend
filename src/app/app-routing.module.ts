import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TutorSignupComponent } from './components/signup-page/tutor-signup/tutor-signup.component';
import { TutorLoginComponent } from './components/login-page/tutor-login/tutor-login.component';
import { StudentSignupComponent } from './components/signup-page/student-signup/student-signup.component';
import { StudentLoginComponent } from './components/login-page/student-login/student-login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuardService } from './components/service/guards/authGuard';
import { TutorprofileComponent } from './components/tutorprofile/tutorprofile.component';


const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'home',component:HomePageComponent},
      { path: 'tutor-signup',component:TutorSignupComponent },
      { path: 'tutor-login',component:TutorLoginComponent },
      { path: 'student-signup',component:StudentSignupComponent },
      { path: 'student-login',component:StudentLoginComponent },
      { path: 'profile',component:TutorprofileComponent },
      {path: 'about',component:AboutComponent ,canActivate: [AuthGuardService]},
  {path: 'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
