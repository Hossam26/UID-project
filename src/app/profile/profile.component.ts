import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: User | any;
  constructor(private _data: DataService) {
    this.userData = this._data.getUserData();
  }

  ngOnInit(): void {}

  achievements: string[] = ['java for android', 'python', 'C++'];
  dates: string[] = ['10/12/2020', '9/22/2020', '9/12/2020'];
}
