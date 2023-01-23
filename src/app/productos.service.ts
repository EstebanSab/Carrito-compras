import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
private productos:any[];
private variableCalidad=false;
private filtroCalidad="bajo";

  constructor() { 
    this.productos=[
      {nombre:"harina",calidad:"alto",precio:12},
      {nombre:"yerba",calidad:"bajo",precio:3},
      {nombre:"cafe",calidad:"alto",precio:41},
      {nombre:"azucar",calidad:"medio",precio:14},
      {nombre:"sal",calidad:"bajo",precio:1},
  ];
  }

  agregarProducto(nombreNuevo:string,calidadNuevo:string,precioNuevo:number){
    this.productos.push({
        nombre:nombreNuevo,
        calidad:calidadNuevo,
        precio:precioNuevo
    })
  }

  getProductos(){
    return this.productos
  }

  verificarCalidad(productoCalidad:string){
    if(this.variableCalidad){
        return  productoCalidad != this.filtroCalidad
    }else{
        return true
    }
  }

  
  cambiarCalidad(){
    this.variableCalidad =! this.variableCalidad
  }



}
