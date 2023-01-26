import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-mi-carrito-view',
  templateUrl: './mi-carrito-view.component.html',
  styleUrls: ['./mi-carrito-view.component.css']
})
export class MiCarritoViewComponent {
  misProductos:any;

  constructor(private adminUsuario:UsuariosService){
    this.setProductos();
  }

  setProductos(){
    if(this.adminUsuario.estaLogueado()){
      this.misProductos=this.adminUsuario.getCarritoUsuario()
    }else{
      alert("debes iniciar sesion para ver tu carrito")
    }
    
  }
}
