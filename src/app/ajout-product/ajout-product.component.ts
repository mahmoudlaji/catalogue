import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-product',
  templateUrl: './ajout-product.component.html',
  styleUrls: ['./ajout-product.component.css']
})
export class AjoutProductComponent implements OnInit {
 Newproduct!:FormGroup


constructor(private fb:FormBuilder,private addproduct:ProductService,private routen:Router){}

  ngOnInit(): void {

    this.Newproduct = this.fb.group(
      {
      id:this.fb.control((null)),
      name:this.fb.control((null)),
      prix:this.fb.control((null)),
      ref:this.fb.control((null)),
      promotion:this.fb.control((false))}
      )
   
  }
 Sav(){
    let product=this.Newproduct.value
    this.addproduct.AddProduct(product)
    this.Newproduct.reset()
    Swal.fire('Your new product has been added')
    
      }
      
}
