import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DBoperation } from '../DB-operations';
import { User } from '../user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
   users:User[]|any=[]
  constructor(private _data:DataService,private DB:DBoperation) { 
    this._data.user.next(JSON.parse(localStorage.getItem("User")||"{}"))
    this.getStudents()
  }
  getStudents(){
    this.DB.getAllStudent().subscribe((res)=>{
          
          Object.values<User>(res).forEach((item)=>{
            if(!item.mail.includes("admin"))
             this.users.push(item)
          })
         
          
    })
  }
  deleteStudent(){

  }
  ngOnInit(): void {
  }

}
