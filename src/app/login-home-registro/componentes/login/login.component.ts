import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/userInterface';
//import { AvisosService } from '../../../services/avisos.service';
//import { LoginService } from '../../services/login.service';
//import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: User = null;

  @Output() eventEmmiter: EventEmitter<null> = new EventEmitter<null>();

  constructor(//private loginService: LoginService,
              private router: Router,
              //public avisos: AvisosService,
              //private tokenStorage: TokenStorageService
              ) { }

  ngOnInit(): void 
  {
    this.user = 
    {
      username: '',
      password: ''
    }
  }

  // aceptar()
  // {
  //   this.loginService.usuarioLogin(this.user).subscribe((res) =>
  //     {
  //       if(res != null && res != undefined)
  //       {
  //         this.router.navigate(['/signUp']);
  //         this.tokenStorage.saveToken(res);
  //         this.tokenStorage.saveUser(this.user);
  //       }
  //     });

  // }

  cancelar()
  {
    this.eventEmmiter.emit(null);
    this.router.navigate(['/bienvenida']);
  }

  home(){
    this,this.router.navigate(['']);
  }
}
