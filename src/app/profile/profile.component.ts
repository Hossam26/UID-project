import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: User | any;
  constructor(private _data: DataService, private ser: AuthService) {
    this._data
      .getUserData(this.ser.usermail.getValue())
      .subscribe((arg) => (this.userData = arg));
  }

  ngOnInit(): void {}

  achievements: string[] = ['java for android', 'python', 'C++'];
  dates: string[] = ['10/12/2020', '9/22/2020', '9/12/2020'];
}
