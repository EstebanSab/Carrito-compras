import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
private usuarios:any[]=[];
private usuarioEstaLogueado:boolean=false;
private usuarioActivo:any;

  constructor() { }

crearUsuario(nombre:string,contrasena:string){
  this.usuarios.push(
    {nombre:nombre,
    contrasena:contrasena
    }
  )
}

iniciarSesion(nombre:string,contrasena:string){
  let usuarioExiste= this.usuarios.find((user)=>{
    return (user.nombre==nombre && user.contrasena==contrasena)
  })
  if(usuarioExiste){
    this.usuarioEstaLogueado=true
    this.usuarioActivo=usuarioExiste;
    console.log(usuarioExiste);
  }else{
    alert("usuario no Existe");
  }
}
estaLogueado(){
  return this.usuarioEstaLogueado;
}
cerrarSesion(){
   this.usuarioEstaLogueado=false;
   this.usuarioActivo={}
}
getData(){
  return this.usuarioActivo
}
}
