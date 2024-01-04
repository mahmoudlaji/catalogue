import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alertvar!:boolean
  constructor(private logservice:UserService,private route:Router){}
  
  ngOnInit(): void {}
    

  loginData={
    email:"",
    psw:"",
    role:""
  }

  log(){
    let test=this.logservice.loginTest(this.loginData)
    if (test) {
      this.route.navigateByUrl('/product')
      this.alertvar=false

    }else this.alertvar=true

  }

}
