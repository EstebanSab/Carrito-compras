import { Component,Input } from '@angular/core';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() nombreProducto='';
  @Input() precioProducto='';
  @Input() calidadProducto=0;
  @Input() vendedorProducto='';
  @Input() idProducto=0;


  constructor(private adminProductos:ProductosService,private adminUsuario:UsuariosService){}
  
  agregarAlCarrito(id:number){
    if(this.adminUsuario.estaLogueado()){
      this.adminUsuario.setCarritoUsuario(this.adminProductos.getProductoId(id));
    }else{
      alert("Debes iniciar sesion para agregar productos al carrito")
    }
  }

}
