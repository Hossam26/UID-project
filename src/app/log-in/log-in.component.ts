import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //
  hide = true;
  constructor(private _AuthService: AuthService, private _Router: Router,private _AuthGuardService:AuthGuardService) {}
  login= async()=> {
     //await this._AuthService.login({})

        localStorage.setItem('token', 'true');
        this._AuthGuardService.isLogin.next(true);
        this._Router.navigateByUrl('/home');
      
  }
  ngOnInit(): void {}
}
