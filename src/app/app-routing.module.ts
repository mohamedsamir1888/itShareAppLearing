import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/products/products.component';
import { MyOrdersComponent } from 'src/app/my-orders/my-orders.component';
import { AdminOrdersComponent } from 'src/app/admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'orders',component:MyOrdersComponent},
  {path:'admin/orders',component:AdminOrdersComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
