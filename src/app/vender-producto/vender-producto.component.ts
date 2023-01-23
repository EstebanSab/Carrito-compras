import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-vender-producto',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent {
//Variables del ngmodel----
nombreNuevo:string="";
calidadNuevo:string="";
precioNuevo:number=0;

constructor(private adminProductos:ProductosService){}

    agregarProducto(){
      this.adminProductos.agregarProducto(this.nombreNuevo,
        this.calidadNuevo,this.precioNuevo);
        this.nombreNuevo='';
        this.calidadNuevo='';
        this.precioNuevo=0;
        }

}
