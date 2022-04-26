import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _AuthGuardService: AuthGuardService
  ) {
  }
  logout() {

    localStorage.removeItem('token');
    this._AuthGuardService.isLogin.next(false);
    this._Router.navigateByUrl('/log-in');
  }
  ngOnInit(): void {}
}
