import { Injectable, OnInit } from '@angular/core';
import { users } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  userData!:Array<users>
  

  constructor() { 
    this.userData=
    [
      {email:"mahmoud@gmail.com",psw:"123",role:"ADMIN"},
      {email:"zied@gmail.com",psw:"456",role:"USER"},
      {email:"med@gmail.com",psw:"789",role:"ADMIN"}
      
    ]
  }
  ngOnInit(): void {
    
  }
  getUser(){
    return this.userData
  }
  addUser(data:users){
    this.userData.push(data)
  }
  //comparer user-email && user-psw
  loginTest(data:users){
    for (let item of this.userData){
      if ((item.email==data.email)&&(item.psw==data.psw))
       {
        return true
       }
  
    }return false
   
    
  }
}
