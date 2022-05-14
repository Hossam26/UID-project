import { Injectable } from '@angular/core';
import { User } from './user';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class DBoperation {
  baseURL =
    'https://e-learning-9ed67-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient,private db: AngularFireDatabase) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  getStudent(id: any): Observable<any> {
    let result = this.http.get<User[]>(this.baseURL + '/Students.json/');
    //console.log(this.db.database.ref('/Students'));
    //console.log(this.db.list('/Students'));
    let str = result.subscribe(response => {
      //response.forEach((user)=>{console.log(user.mail)});
      console.log("Respone issss   ",response[0]);
      Object.values(response).forEach((element)=>{console.log("ELEMENT  ",element)})
      
    });
    console.log("Resultttttttt  ",result);
    return result;
  }
  addStudent(user: User): Observable<User> {
    return this.http.post<User>(
      this.baseURL + '/Students.json/', user
    );
  }
  updateStudent(user: User): Observable<User> {
    return this.http.put<User>(
      this.baseURL + '/Students.json/' , user
    );
  }
  Deletestudent(id: any): Observable<User> {
    return this.http.delete<User>(
      this.baseURL + '/Students.json/' + id,
      this.httpOptions
    );
  }
}
