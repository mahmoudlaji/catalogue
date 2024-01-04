import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 listUsers!:any
 
 constructor(private apiservice:ApiService){}

  ngOnInit(): void {
    this.listUsers = this.apiservice.getUllUsers().subscribe((resultl:any)=>{
      this.listUsers = resultl
    })
    
  }

}
