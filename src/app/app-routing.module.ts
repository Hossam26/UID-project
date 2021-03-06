import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OnlineDegreesComponent } from './online-degrees/online-degrees.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { FacultyComponent } from './faculty/faculty.component';
import { CoursPageComponent } from './cours-page/cours-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: 'faculty', component: FacultyComponent, canActivate: [AuthGuardService] },
  {
    path: 'online-degrees',
    component: OnlineDegreesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'new-course',
    component: AddNewCourseComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cours-page/:id',
    component: CoursPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
