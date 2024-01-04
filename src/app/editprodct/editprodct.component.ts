import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprodct',
  templateUrl: './editprodct.component.html',
  styleUrls: ['./editprodct.component.css']
})
export class EditprodctComponent implements OnInit {
product!:any
productid!: number;
editformgrp!:FormGroup

  constructor(private route:ActivatedRoute,private editservice:ProductService,private fb:FormBuilder){
    this.productid = this.route.snapshot.params['id']
    //console.log("this.productid=>",this.productid)
  }
  ngOnInit(): void {
    this.product=this.editservice.update(this.productid)
    this.editformgrp = this.fb.group(
      {
      id:this.fb.control((this.product.id)),
      name:this.fb.control((this.product.name)),
      prix:this.fb.control((this.product.prix)),
      ref:this.fb.control((this.product.ref)),
      promotion:this.fb.control((this.product.promotion))}
      )


   
  }

  UPDATEPRODUCT(){
    let p=this.editformgrp.value
    this.editservice.UpDateProduct(p)
    this.editformgrp.reset()
    
    Swal.fire({
      title: 'Are you sure?',
      text: "to update this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          ' update!',
          'Your product has been update.',
          'success'
        )
      }
    })
    
   
  }
  
}
