import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { ProductoComponent } from './producto/producto.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosViewComponent,
    ProductoComponent,
    PokemonViewComponent,
    FiltroProductosComponent,
    LoginViewComponent,
    VenderProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
