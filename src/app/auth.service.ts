import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';
import { User } from './user';
import { DBoperation } from './DB-operations';
import { DataService } from './data.service';

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
    private _data : DataService,
  ) {}

  signUp(registerValues: User) {
    let result = this._DBo.addStudent(registerValues).subscribe((response)=>{console.log("This respone is ",response)});
    //let result1 = this._DBo.getStudent().subscribe((response)=>{console.log("This respone is ",response)});
    console.log(result);
  }

  login(loginValues: User) {
    let a = 0;    
    
    
    
    let result1 = this._DBo.getStudent(loginValues.mail).subscribe((response)=>{
      Object.values(response as User[]).forEach((element)=>{
        console.log("elementtt",element);
        
        if(element.mail == loginValues.mail && element.pass == loginValues.pass)
        {
          this._data.user.next(element); 
         

          localStorage.setItem('token', 'true');
          this._AuthGuardService.isLogin.next(true);
          //location.href = '/home';
        }
      })
    });

    /*let users: User[] = [];
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
    }*/
  }
}
