import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-filtro-productos',
  templateUrl: './filtro-productos.component.html',
  styleUrls: ['./filtro-productos.component.css']
})
export class FiltroProductosComponent {

    calidades: Array<any> = [
    { name: 'bajo', value: 'bajo' },
    { name: 'medio', value: 'medio' },
    { name: 'alto', value: 'alto' },
  ];

  precios: Array<any> = [
    { valor: 'menores a $10', value: 10 },
    { valor: 'menores a $50', value: 50 },
    { valor: 'menores a $100', value: 100 },
    { valor: 'todos', value: 0 }
  ];
  

  constructor(private adminProductos:ProductosService) { }

 


onCheckboxChange(event: any) {
  if (event.target.checked) {
    this.adminProductos.setCalidad(event.target.value);
  } else {
    this.adminProductos.removeCalidad(event.target.value);
  }
}


cambioPrecio(event: any) {
  if (event.target.checked) {
    this.adminProductos.setPrecio(event.target.value);
  } 
}

}