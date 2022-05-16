import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DBoperation } from '../DB-operations';
import { User } from '../user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  users: User[] | any = [];
  userId: any = [];
  count: number = 0;
  constructor(private _data: DataService, private DB: DBoperation) {
    this._data.user.next(JSON.parse(localStorage.getItem('User') || '{}'));

    this.DB.getAllStudent().subscribe((res) => {
      this.users = [];
      this.userId = [];
      
      Object.values<User>(res).forEach((item,i) => {
        if (!item.mail.includes('admin')) this.users.push(item);
                
           this.userId.push(Object.keys(res)[i]);
         
      });
    });
  }
getAllStudent(){
  this.DB.getAllStudent().subscribe((res) => {
    this.users = [];
    this.userId = [];

    Object.values<User>(res).forEach((item, i) => {
      if (!item.mail.includes('admin')) this.users.push(item);

      this.userId.push(Object.keys(res)[i]);
    });
  });
}
  async deleteStudent(id: string) {
    await this.DB.Deletestudent(id);
    this.getAllStudent();
  }
  ngOnInit(): void {}
}
