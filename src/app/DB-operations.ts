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

@Injectable({
  providedIn: 'root',
})
export class DBoperation {
  baseURL =
    'https://console.firebase.google.com/u/0/project/e-learning-dd473/database/e-learning-dd473-default-rtdb/data/~2F';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  getStudent(id: any): Observable<User> {
    return this.http.get<User>(this.baseURL + '/Students.json/' + id);
  }
  addStudent(user: User): Observable<User> {
    return this.http.post<User>(
      this.baseURL + '/Students.json/' + JSON.stringify(user),
      this.httpOptions
    );
  }
  updateStudent(user: User): Observable<User> {
    return this.http.put<User>(
      this.baseURL + '/Students.json/' + JSON.stringify(user),
      this.httpOptions
    );
  }
  Deletestudent(id: any): Observable<User> {
    return this.http.delete<User>(
      this.baseURL + '/Students.json/' + id,
      this.httpOptions
    );
  }
}
