import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist!:Array<Product>

  constructor() { 
    this.productlist=[
      {id: 1, name: 'TV',prix:'2000',ref:'TV1',promotion:true},
      {id: 2, name: 'LAPTOP',prix:'3500',ref:'LAP1',promotion:false},
      {id: 3, name: 'PHONE',prix:'1500',ref:'PH1',promotion:true},
      {id: 4, name: 'MODEM',prix:'100',ref:'MOD1',promotion:false}

    ]}
    
  getProduct(){
    return this.productlist
  }
  deleteProd(data:Product){
    let index=this.productlist.indexOf(data)
    this.productlist.splice(index,1)
  }
  set(id:number){
    let product = this.productlist.find(p=> p.id == id)
    if(product){
      product.promotion=!product.promotion
    }
  }
  search(data:string){
    let products=this.productlist.filter(p=>p.name.includes(data))
    return products 
  }
  AddProduct(data:Product){

   this.productlist.push(data)

  }
  update(id:number){
    let product = this.productlist.find(p=> p.id == id)
   return product
  }

   UpDateProduct(product:Product){
    this.productlist=this.productlist.map(p=>(p.id==product.id)?product:p)
    
   }


}
