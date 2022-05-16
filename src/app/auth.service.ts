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
        
    this._DBo.getStudent(registerValues.mail).subscribe((response)=>{console.log("This respone is ",response)
    if(Object.values(response).length==0){

      this._DBo.addStudent(registerValues).subscribe((response)=>{ this._Router.navigateByUrl('/log-in');});

    } else{
      console.log("registered");
      
    }
  });
  }

  login(loginValues: User) {
    let a = 0;    
    
    
    
     this._DBo.getStudent(loginValues.mail).subscribe((element)=>{
      let user=Object.values<User>(element)[0]

      console.log("ddd",element);
      
    if(user.mail == loginValues.mail && user.pass == loginValues.pass)
        {
          localStorage.setItem("User",JSON.stringify(user))
        
         console.log("this",this._data.user.getValue());
         

          localStorage.setItem('token', 'true');
          localStorage.setItem("userId", JSON.stringify( Object.keys(element)));
          this._AuthGuardService.isLogin.next(true);
          console.log("admin",user);
          
          if(user.mail.includes('admin')){
            this._Router.navigateByUrl('/admin');
            this.admin.next(true)
            this._AuthGuardService.isLogin.next(true);

          }
          else{
            location.href = '/home';

          }
        }
     
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
