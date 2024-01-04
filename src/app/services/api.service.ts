import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  constructor(private http:HttpClient ) { }
 
 
 
  ngOnInit(): void {
    

  }
  getUllUsers(){
   return this.http.get('https://jsonplaceholder.typicode.com/users')

  
  }
}
