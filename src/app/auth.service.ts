import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin = new BehaviorSubject(false);
  constructor(
    private _Router: Router,
    private _AuthGuardService: AuthGuardService
  ) {}
  signUp(registerValues: User) {
    let users: User[] = [];
    users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(registerValues);
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
  }
  login(loginValues: User) {
    let users: User[] = [];

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
