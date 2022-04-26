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
  mail = new FormControl('', [Validators.required, Validators.email]);

  public getErrorMessage() {
    if (this.mail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.mail.hasError('email') ? 'Not a valid email' : '';
  }
  //
  hide = true;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _AuthGuardService: AuthGuardService
  ) {}
  loginForm: FormGroup = new FormGroup({
    mail: new FormControl(null, [Validators.required, Validators.email]),
    pass: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[A-Za-z]{1,}[0-9]{1,}/),
      Validators.minLength(8),
    ]),
  });
  login = async () => {
    const res= await this._AuthService.login(this.loginForm.value);
    if(res){
      localStorage.setItem('token', 'true');
      this._AuthGuardService.isLogin.next(true);
      location.href = '/home';
    }
    else{
      return
    }
  
    
  };
  ngOnInit(): void {}
}
