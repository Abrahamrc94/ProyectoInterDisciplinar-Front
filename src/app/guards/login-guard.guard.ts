import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login-registro.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private router : Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // verifica si está logeado preguntando al servicio
    if (this.loginService.isloggedIn(state.url)) {
      return true;
    }

    // si no lo esta, lanzamos un error y notificamos que debe estar logado
    
Swal.fire
({
      title: 'Acceso denegado',
      text: 'Para usar los siquientes servicios debe loguearse',
      icon: 'error',
    });
    
    // redireciono al login
    this.router.navigate(['login']);

    return false;
  }
  
}
