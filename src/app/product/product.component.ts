import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
prodData!:Array<Product>
DATA={
  keyword:""
}


  constructor(private prodservice:ProductService,private route:Router){}

  ngOnInit() {
    this.prodData=this.prodservice.getProduct()
  }
 delete(data:Product){
 /* let conf=confirm("you want delete data")
  if(conf){
  this.prodservice.deleteProd(data)
 }*/
 Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.prodservice.deleteProd(data)
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})

}
 setPromotion(data:any){
  this.prodservice.set(data.id)
 }
 searchProduct(){
  let x=this.DATA.keyword
  this.prodData=this.prodservice.search(x)
 
}
addproduct(){
  this.route.navigateByUrl('/ajoutProduct')

}
gotoEditProduct(p:Product){
  this.route.navigateByUrl('editproduct/'+p.id)

}


}
