import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})
export class FiltroProductosComponent {
  constructor(private adminProductos:ProductosService){

  }
  cambiarCalidad(){
    this.adminProductos.cambiarCalidad()
  }
}
