import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user = {}
  constructor(private data : DataService)
  {
    this.user = data.user.value
    console.log('Edit User ', this.user)
  }

  ngOnInit(): void {
  }

}
