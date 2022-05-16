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
  getStudent(mail:string): Observable<any> {
    let result = this.http.get<User[]>(this.baseURL + '/Students.json?orderBy=mail&startAt=hossam@gmail.com');
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
