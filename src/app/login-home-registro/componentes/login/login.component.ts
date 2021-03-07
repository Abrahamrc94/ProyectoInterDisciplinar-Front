import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/userInterface';
import { LoginService } from '../../../services/login-registro.service'; 
import { ErroresService } from '../../../services/errores.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: User = null;

  /**String error y Boolean para error usuario o contraseña incorrecta */
  mensaje:string;
  error:boolean = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private errorService: ErroresService) { }

  ngOnInit(): void 
  {
    this.user = 
    {
      username: '',
      password: ''
    }
  }

  //Hace la peticion para logarse al back, si es correcta nos notifica y nos redirige, si no nos devuelve un error
  aceptar()
  {
    this.loginService.login(this.user.username, this.user.password).subscribe(data => {
      if(data.mensaje != null){
        this.mensaje = data.mensaje;
        this.error = true;
      }
      else if (data != undefined) {
        localStorage.clear();
        localStorage.setItem('id', data.id);
        if(localStorage.getItem("id") != ""){
          this.errorService.LoginCorrecto('/productos')
        }else{
          localStorage.clear();
        }
      }
    },
    error => {
      if(error != null){
        this.errorService.ErrorInesperado()
      }
    })

  }

  home(){
    this.router.navigate(['']);
  }
}
