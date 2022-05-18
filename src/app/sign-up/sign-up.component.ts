import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _AuthGuardService: AuthGuardService
  ) {}
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  registerForm: FormGroup = new FormGroup({
    fname: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]{3,10}$/),
    ]),
    lname: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]{3,10}$/),
    ]),
    job: new FormControl(null, [
      Validators.required
    ]),
    userName: new FormControl(null),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    pass: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[a-z0-9]/),
      Validators.minLength(5),
    ]),
    courses: new FormControl([])
  });
  signup() {
    if(this.registerForm.invalid){
      return
    }
    this._AuthService.signUp(this.registerForm.value);
   
  }
  ngOnInit(): void {}
}
