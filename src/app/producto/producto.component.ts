import { Component,Input, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  @Input() nombreProducto='';
  @Input() precioProducto='';
  @Input() calidadProducto=0;
  @Input() vendedorProducto='';
  @Input() idProducto=0;
  private  usuarioLogueado:Boolean = true

  constructor(private adminProductos:ProductosService,private adminUsuario:UsuariosService){}
  
  agregarAlCarrito(id:number){
   
    if(this.usuarioLogueado){
      this.adminUsuario.setCarritoUsuario(this.adminProductos.getProductoId(id));
    }else{
      alert("Debes iniciar sesion para agregar productos al carrito")
    }
  }

  ngOnInit(): void {
    this.adminUsuario.getEstaLogueado$().subscribe(valor =>{
      this.usuarioLogueado = valor;
    });
  }
}
