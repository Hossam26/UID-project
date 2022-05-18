import { User } from './../user';
import { DBoperation } from './../DB-operations';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  users:User[]=[]
  show:boolean=false
  constructor(private data:DBoperation) { }
  view(){
    this.show=true
    this.data.getAllStudent().subscribe((users)=>{
      this.users=[]
      console.log("ibns",users);
      Object.values<User>(users).forEach((item,i) => {
        if (!item.mail.includes('admin')&&!item.mail.includes('faculty'))
         this.users.push(item);
                
          
         
      });

    })
  }


  ngOnInit(): void {
  }

}
