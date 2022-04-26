import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUserData() {
    let user: User = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user;
  }
  editUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    let users: User[] = [];
    users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUsers = users.filter((e) => {
      return e.mail != user.mail;
    });
    newUsers.push(user);
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
