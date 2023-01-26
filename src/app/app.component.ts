import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  usuarioLogueado:boolean=true;

 constructor(private adminUsuarios:UsuariosService){
  this.verificarSesion();
 }
 
 verificarSesion(){
  this.usuarioLogueado=this.adminUsuarios.estaLogueado();
 }
 
 cerrarSesion(){
  this.adminUsuarios.cerrarSesion()
  this.verificarSesion()
 }
}
