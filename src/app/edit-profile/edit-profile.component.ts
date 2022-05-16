import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 import {User} from '../user'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user:User|any = {} 
  first_name:string="";
  last_name:string="";
  job:string="";
  constructor(private data : DataService)
  {

    data.user.subscribe((user)=>{
      this.user=user as User
  
      
      this.first_name=user.fname
      this.last_name=user.lname
      this.job=user.job
    }) 
    console.log('Edit User ', this.user)
  }
updateUser(){
  this.user.fname=this.first_name
  this.user.lname=this.last_name
  this.user.job=this.job
  console.log('Edit User ', this.user)

  this.data.editUser(this.user)
}
  ngOnInit(): void {
  }

}
