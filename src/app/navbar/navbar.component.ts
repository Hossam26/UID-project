import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userData: User | any;
  constructor(
    private _Router: Router,
    private _AuthGuardService: AuthGuardService,
    private _data: DataService
  ) {
    this.userData = this._data.getUserData();
  }
  logout() {
    localStorage.removeItem('token');
    this._AuthGuardService.isLogin.next(false);
    this._Router.navigateByUrl('/log-in');
  }
  ngOnInit(): void {}
}
