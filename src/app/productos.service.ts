import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
private productos:any[];
private calidadesFiltro:string[]=[];
private precioFiltro:number=0;

  constructor() { 
    this.productos=[
      {nombre:"harina",calidad:"alto",precio:12,vendedor:"user"},
      {nombre:"yerba",calidad:"bajo",precio:3,vendedor:"user"},
      {nombre:"cafe",calidad:"alto",precio:41,vendedor:"user"},
      {nombre:"azucar",calidad:"medio",precio:14,vendedor:"user"},
      {nombre:"sal",calidad:"bajo",precio:1,vendedor:"user"},
  ];
  }

  agregarProducto(nombreNuevo:string,calidadNuevo:string,precioNuevo:number,vendedorNuevo:string){
    this.productos.push({
        nombre:nombreNuevo,
        calidad:calidadNuevo,
        precio:precioNuevo,
        vendedor:vendedorNuevo
    })
  }

  getProductos(){
    return this.productos
  }

  setCalidad(filtroCalidad:string){
    this.calidadesFiltro.push(filtroCalidad);
  }

  removeCalidad(filtroCalidad:string){
    this.calidadesFiltro = this.calidadesFiltro.filter(cal => cal!=filtroCalidad);
  }

  setPrecio(precio:number){
    this.precioFiltro=precio;
  }

  

  verificarCalidadPrecio(productoFiltrar:any){
    if(this.calidadesFiltro.length == 0 ){
      if(productoFiltrar.precio < this.precioFiltro || this.precioFiltro==0){
          return true
      }
    }else if(this.calidadesFiltro.find((cal)=> cal==productoFiltrar.calidad)){
      if(productoFiltrar.precio < this.precioFiltro || this.precioFiltro==0){
        return true
      }
    }
    return false;
  }

  
 



}
