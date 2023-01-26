import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginService } from './login.service';
import { MiCarritoViewComponent } from './mi-carrito-view/mi-carrito-view.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';

const routes: Routes = [
  {path:'inicio',component:ProductosViewComponent},
  {path:'',component:ProductosViewComponent},
  {path:'micarrito',component:MiCarritoViewComponent,
  canActivate:[LoginService]},
  {path:'login',component:LoginViewComponent},
  {path:'vender',component:VenderProductoComponent,
  canActivate:[LoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
