import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../interfaces/customerInterface';
import { LoginService } from '../../../services/login-registro.service'; 
import { ErroresService } from '../../../services/errores.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  signUpForm: FormGroup;
  customer: Customer = null;
  /**mensajes y control de errores */
  mensaje:string;
  error:boolean = false;


  constructor(private router: Router, private loginRegistroService: LoginService,
               private errorService: ErroresService) { }

  //Inicializamos el formulario cuando se carga el componente
  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i")]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{0,}$")])
    })
  }


  //Metodo que al pulsar aceptar recoge los datos del formulario y crea al customer
  crearCustomer(){

    this.customer = {

      name: this.signUpForm.value.name,
      surname: this.signUpForm.value.surname,
      dni: this.signUpForm.value.dni,
      username: this.signUpForm.value.nick,
      password: this.signUpForm.value.password
    }

    this.loginRegistroService.registraCustomer(this.customer).subscribe(data => {
      if(data.mensaje != null){
        this.mensaje = data.mensaje;
        this.error = true;
      }
      else if (data != undefined) {
      this.errorService.RegistroCorrecto('/login')  //muestra informacion con sweetalert
        }else{
          localStorage.clear();
        }
    },
    error => {
      if(error != null){
        this.errorService.ErrorInesperado();  //muestra el error con sweetalert
      }
    }
    )


  }
  

  cancelar()
  {
    this.router.navigate(['']);
  }
}
