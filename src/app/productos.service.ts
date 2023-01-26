import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
private productos:any[];
private calidadesFiltro:string[]=[];
private precioFiltro:number=0;
private nombreFiltro:string='';
private idProductos:number=5;

  constructor() { 
    this.productos=[
      {id:0,nombre:"harina",calidad:"alto",precio:12,vendedor:"user"},
      {id:1,nombre:"yerba",calidad:"bajo",precio:3,vendedor:"user"},
      {id:2,nombre:"cafe",calidad:"alto",precio:41,vendedor:"user"},
      {id:3,nombre:"azucar",calidad:"medio",precio:14,vendedor:"user"},
      {id:4,nombre:"sal",calidad:"bajo",precio:1,vendedor:"user"},
  ];
  }

  agregarProducto(nombreNuevo:string,calidadNuevo:string,precioNuevo:number,vendedorNuevo:string){
    this.productos.push({
        id:this.idProductos++,
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
          return true  && this.filtrarProductoNombre(productoFiltrar.nombre)
      }
    }else if(this.calidadesFiltro.find((cal)=> cal==productoFiltrar.calidad)){
      if(productoFiltrar.precio < this.precioFiltro || this.precioFiltro==0){
        return true
      }
    }
    return false;
  }

  
 
  getProductoId(id:number){
    return this.productos.find((pro)=>{return (pro.id==id)})
  }

  buscarProducto(nombre:string){
    this.nombreFiltro=nombre;
  }
  filtrarProductoNombre(nombre:string){
    if(this.nombreFiltro.length==0){
      return true
    }
    return nombre==this.nombreFiltro
     
  }

}
