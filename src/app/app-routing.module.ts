import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { MiCarritoViewComponent } from './mi-carrito-view/mi-carrito-view.component';
import { ProductosFavoritosComponent } from './productos-favoritos/productos-favoritos.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';

const routes: Routes = [
  {path:'inicio',component:ProductosViewComponent},
  {path:'micarrito',component:MiCarritoViewComponent},
  {path:'login',component:LoginViewComponent},
  {path:'favoritos',component:ProductosFavoritosComponent},
  {path:'vender',component:VenderProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
