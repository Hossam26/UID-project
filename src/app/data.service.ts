import { Injectable } from '@angular/core';
import { User } from './user';
import { DBoperation } from './DB-operations';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private data: DBoperation) {}
  user = new BehaviorSubject<User|any>({})
 
  getAllUsers(){
    return 
  }
  getUserData(id: string): Observable<User> {
    return this.data.getStudent(id);
  }
  editUser(user: User) {
    return this.data.updateStudent(user);
  }
  EnrollCourseToUser(course: any) {
    let user: User = JSON.parse(localStorage.getItem('currentUser') || '{}');
    let courses = [];
    courses = JSON.parse(localStorage.getItem(user.mail) || '[]');
    courses.push(course);
    localStorage.setItem(user.mail, JSON.stringify(courses));
  }
  getCoursesOfUser() {
    let user: User = JSON.parse(localStorage.getItem('currentUser') || '{}');
    let courses = [];
    courses = JSON.parse(localStorage.getItem(user.mail) || '[]');
    return courses;
  }
}
