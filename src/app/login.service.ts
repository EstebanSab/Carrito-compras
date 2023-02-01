import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{

  constructor(private router:Router,private adminUsuario:UsuariosService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.adminUsuario.estaLogueadoComun()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false; 
    }
   
  }

  

}
