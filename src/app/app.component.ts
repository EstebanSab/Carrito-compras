import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuarioLogueado:boolean=false;

 constructor(private adminUsuarios:UsuariosService){
  this.verificarSesion();
 }
 
 verificarSesion(){ 

 }
 
 cerrarSesion(){
  this.adminUsuarios.cerrarSesion()
  this.verificarSesion()
 }

 ngOnInit(): void {
  //nos suscribimos al observable
  this.adminUsuarios.getEstaLogueado$().subscribe(valor =>{
    this.usuarioLogueado = valor;
  });
 }
}
