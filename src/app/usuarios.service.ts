import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
private usuarios:any[]=[];
private usuarioActivoId:number=-1;
private idUsuarios =0;
//Observable
private estaLogueado$:Subject<boolean>

  constructor() {
    //observable
    this.estaLogueado$ = new Subject();
    this.estaLogueado$.next((this.usuarioActivoId != -1)); this.estaLogueado$.next(false);
   }

crearUsuario(nombre:string,contrasena:string){
  this.usuarios.push(
    {id:this.idUsuarios++,
      nombre:nombre,
    contrasena:contrasena,
    carrito:[],
    favoritos:[],
    logueado:false
    }
  )
}

iniciarSesion(nombre:string,contrasena:string){
  
  if( this.usuarioActual(nombre,contrasena)){
    this.usuarioActual(nombre,contrasena).logueado=true
  
  
    this.usuarioActivoId= this.usuarioActual(nombre,contrasena).id;

      //observable
      this.estaLogueado$.next((this.usuarioActivoId != -1));

    console.log(this.usuarioActual(nombre,contrasena))
  }else{
    alert("usuario no Existe");
  }
}
getEstaLogueado$():Observable<boolean>{
  return this.estaLogueado$.asObservable();
}

//private getEstaLogueado():boolean{
//  return this.estaLogueado$.asObservable();
//}

cerrarSesion(){
  this.usuarioActualId(this.usuarioActivoId).logueado=false
  this.usuarioActivoId = -1;
  this.estaLogueado$.next((this.usuarioActivoId != -1));
}
getData(){
  return this.usuarioActualId(this.usuarioActivoId)
}

usuarioActual(nombre:string,contrasena:string){
  return this.usuarios.find((user)=>{
    return (user.nombre==nombre && user.contrasena==contrasena)
  })
}

usuarioActualId(id:number){
  return this.usuarios.find((user)=>{
    return (user.id==id)
  })
}

setCarritoUsuario(producto:any){
  this.usuarioActualId(this.usuarioActivoId).carrito.push(producto)
}
getCarritoUsuario(){
 return this.usuarioActualId(this.usuarioActivoId).carrito
}
estaLogueadoComun(){
  return this.usuarioActivoId != -1
}
}
