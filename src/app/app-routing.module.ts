import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { LoginService } from './login.service';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';

const routes: Routes = [
  {path:'inicio',component:ProductosViewComponent},
  {path:'',component:ProductosViewComponent},
  {path:'micarrito',component:PokemonViewComponent,
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
