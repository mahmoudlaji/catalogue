import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { AjoutProductComponent } from './ajout-product/ajout-product.component';
import { EditprodctComponent } from './editprodct/editprodct.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'registre',component:RegistreComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'header',component:HeaderComponent},
  {path:'ajoutProduct',component:AjoutProductComponent},
  {path:'editproduct/:id',component:EditprodctComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
