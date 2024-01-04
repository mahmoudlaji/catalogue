import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { users } from '../model/user.model';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
regData!:Array<users>

  constructor(private regservice:UserService){}

  ngOnInit(): void {
    this.regData=this.regservice.getUser()
  }
  regU={
    email:"",
    psw:"",
    role:""
  }


  save(){
    /*this.regData=this.regservice.getUsers()
    console.log("this.regData=>",this.regData)*/
    this.regservice.addUser(this.regU)
    console.log("regList=>",this.regData)

  }

}
