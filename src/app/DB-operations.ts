import { Injectable } from '@angular/core';
import { User } from './user';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import {getDatabase,get,update,ref,remove} from 'firebase/database'
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase}  from '@angular/fire/compat/database';

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
  getAllStudent(): Observable<any> {
    let result = this.http.get<any>(this.baseURL + `/Students.json`);
    return result;
  }
  getStudent(mail:string): Observable<any> {
    let result = this.http.get<any>(this.baseURL + `/Students.json?orderBy="mail"&equalTo="${mail}"&print=pretty`);
    return result;
  }
  addStudent(user: User): Observable<User> {
    user.courses=[]
    console.log("addd");
    
    return this.http.post<User>(
      this.baseURL + '/Students.json/', user
    );
  }
  async updateStudent(user: User): Promise<any> {
  console.log(localStorage.getItem('userId'));
    let db=getDatabase()
    await update(ref(db,`/Students/${localStorage.getItem('userId')}`),user)
         
  
  }
  async  Deletestudent(id: any): Promise<any> {
    console.log("dddddde",id)
    let db=getDatabase()
    await remove(ref(db,`/Students/${id}`))
       
  
  }
}
