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
  private  usuarioLogueado:Boolean = true

  constructor(private adminUsuario:UsuariosService){
    this.setProductos();
  }

  setProductos(){
    if(this.usuarioLogueado){
      this.misProductos=this.adminUsuario.getCarritoUsuario()
    }else{
      alert("debes iniciar sesion para ver tu carrito")
    }
    
  }
  ngOnInit(): void {
    this.adminUsuario.getEstaLogueado$().subscribe(valor =>{
      this.usuarioLogueado = valor;
    });
  }
}
