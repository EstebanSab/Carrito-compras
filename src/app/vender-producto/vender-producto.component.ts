import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

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

constructor(private adminProductos:ProductosService,private usuario:UsuariosService){}

    agregarProducto(){
      this.adminProductos.agregarProducto(this.nombreNuevo,
        this.calidadNuevo,this.precioNuevo,this.usuario.getData().nombre);
        this.nombreNuevo='';
        this.calidadNuevo='';
        this.precioNuevo=0;
        }

}
