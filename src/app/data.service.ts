import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUserData() {
  let user:User= JSON.parse(localStorage.getItem('currentUser')||'{}')
  return JSON.parse(localStorage.getItem(user.id)||"{}")   
  
  }
}
