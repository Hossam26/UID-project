import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  signUp(registerValues: any) {

   let users=[]
   users=JSON.parse(localStorage.getItem('users')||"[]") 
    users.push(registerValues)
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users))
   


  }
  login(loginValues: User){
    
    let users:User[] = [];
    users = JSON.parse(localStorage.getItem('users') || '[]'); 
   const user= users.filter((e)=>{
       return e.mail==loginValues.mail&&e.pass==loginValues.pass

    })
    if(user[0]!=undefined){
      
      localStorage.setItem('currentUser',JSON.stringify(user[0]))
      return true
    }
    else{
      return false
    }

    
  }
}
