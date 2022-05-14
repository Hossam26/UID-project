import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';
import { User } from './user';
import { DBoperation } from './DB-operations';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usermail = new BehaviorSubject('');
  admin = new BehaviorSubject(false);
  constructor(
    private _Router: Router,
    private _AuthGuardService: AuthGuardService,
    private _DBo : DBoperation,
  ) {}
  signUp(registerValues: User) {
    //let result = this._DBo.addStudent(registerValues).subscribe((response)=>{console.log("This respone is ",response)});
    let result1 = this._DBo.getStudent(registerValues.mail).subscribe((response)=>{console.log("This respone is ",response)});
    console.log(result1);
  }
  login(loginValues: User) {
    let users: User[] = [];
    this.usermail.next(loginValues.mail);
    users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.filter((e) => {
      return e.mail == loginValues.mail && e.pass == loginValues.pass;
    });
    console.log(loginValues);

    if (loginValues.mail.includes('@admin')) {
      console.log('ssss');

      this.admin.next(true);
      localStorage.setItem('token', 'true');
      this._AuthGuardService.isLogin.next(true);
      this._Router.navigateByUrl('/admin');
      return;
    }
    if (user[0] != undefined) {
      this.admin.next(false);
      localStorage.setItem('currentUser', JSON.stringify(user[0]));
      return true;
    } else {
      return false;
    }
  }
}
