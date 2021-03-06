import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { DataService } from '../data.service';
import { User } from '../user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userData: User | any;
  admin:boolean=false
  constructor(
    private _Router: Router,
    private _AuthGuardService: AuthGuardService,
    private _data: DataService,
    private _Auth: AuthService
  ) {
    this._data.user.subscribe((user)=>{
      this.userData=user
    })
    this._Auth.admin.subscribe((res)=>{this.admin=res})
  }
  logout() {location.href="/log-in"
    localStorage.clear()

    localStorage.removeItem('token');
    this.userData.fname = 'User';
    localStorage.removeItem('currentUser');
    this._AuthGuardService.isLogin.next(false);
    this._Router.navigateByUrl('/log-in');
  }
  ngOnInit(): void {}
}
