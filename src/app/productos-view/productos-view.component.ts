import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html',
  styleUrls: ['./productos-view.component.css']
})
export class ProductosViewComponent implements OnInit {
misProductos:any;

constructor(private adminProductos:ProductosService,private dataSv:HttpDataService){
  //this.misProductos=this.adminProductos.getProductos()
}


verificarCalidadPrecio(productoFiltrar:any){
  return this.adminProductos.verificarCalidadPrecio(productoFiltrar)
}

ngOnInit(){
  this.dataSv.getCaracteres()
  .subscribe(array =>{
    console.log(array)
    this.misProductos=array.results;
  })
}


  
      

  
  

}
