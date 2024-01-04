import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  prodData!:Array<Product>
  searchforgroup!:FormGroup
  Data={
    keyword:""
  }
 
  constructor(private proservice:ProductService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.searchforgroup=this.fb.group({keyword:this.fb.control(null)})
    this.prodData=this.proservice.getProduct()
  }
  searchproducts(){
let x=this.searchforgroup.value.keyword
this.prodData=this.proservice.search(x)

  }

}
