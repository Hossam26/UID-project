import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  achievements: string[] = ['java for android', 'python', 'C++'];
  dates: string[] = ['10/12/2020', '9/22/2020', '9/12/2020'];
}
