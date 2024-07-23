import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { CartComponent } from './cart/cart.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelect, MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    HomeComponent,
    ProductsComponent,
    AddproductsComponent,
    ManageproductsComponent,
    CartComponent,
    ViewordersComponent,
    WishlistComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, 
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,MatButtonModule,MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
