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
      Validators.pattern(/[a-z0-9]/),
      Validators.minLength(5),
    ]),
  });
  login = async () => {
    if(this.loginForm.invalid){
      return
    }
    this._AuthService.login(this.loginForm.value); 
    
  };
  ngOnInit(): void {}
}
