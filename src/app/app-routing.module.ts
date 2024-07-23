import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'createnew',component:AddproductsComponent},
      {path:'orders',component:ViewordersComponent},
      {path:'manage',component:ManageproductsComponent}
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'home',component:UserprofileComponent},
      {path:'products',component:ProductsComponent},
      {path:'cart',component:CartComponent},
      {path:'fav',component:WishlistComponent},
      {path:'orders',component:ViewordersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
