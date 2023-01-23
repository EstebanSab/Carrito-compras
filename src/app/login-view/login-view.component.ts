import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent{
//Variables del ngmodel----
nombreUsuarioNuevo:string="";
contrasenaUsuarioNuevo:string="";
private usuarioLogueado:boolean | undefined;

//@Output agregarDeslogueoVar=new EventEmitter<boolean>();

constructor(private adminUsuario:UsuariosService){}
 


crearUsuario(){
  this.adminUsuario.crearUsuario(this.nombreUsuarioNuevo,this.contrasenaUsuarioNuevo);
}
iniciarSesion(){
  this.adminUsuario.iniciarSesion(this.nombreUsuarioNuevo,this.contrasenaUsuarioNuevo);
  this.usuarioLogueado=this.adminUsuario.estaLogueado();
  console.log("variable usuario logueado"+this.usuarioLogueado);
}
}
