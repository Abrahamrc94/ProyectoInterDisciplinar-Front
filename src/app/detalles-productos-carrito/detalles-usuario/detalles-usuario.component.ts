import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../interfaces/customerInterface';
import { LoginService } from '../../services/customer.service';
import { ErroresService } from '../../services/errores.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.scss']
})
export class DetallesUsuarioComponent implements OnInit {
  updateForm: FormGroup;
  customer: Customer = null;
  /**mensajes y control de errores */
  mensaje:string;
  error:boolean = false;

  constructor(private router : Router, private customerService: LoginService, private errorService: ErroresService) { }

  ngOnInit(): void {

    //tan pronto se accede al componente traemos los datos del Customer
    this.cargarDatosUsuarioAutenticado();

    //Inicializamos el formulario
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i")])
   })
  }

  
  // Este método llama al servicio de customers, le pide obtener el customer autenticado y pone sus datos en pantalla.
  cargarDatosUsuarioAutenticado() {
    this.customerService.getUsuarioAutenticado().subscribe(res => {
      // Cuando obtengo los datos, los muestro en los controles del formulario.
      this.customer = res; 
      this.updateForm.controls.name.setValue(this.customer.name);
      this.updateForm.controls.surname.setValue(this.customer.surname);
      this.updateForm.controls.dni.setValue(this.customer.dni);
    });
  }

  UpdateCustomer(){

       // Leo los valores de los controles del formulario y los introduzco en this.customer
   this.customer.name = this.updateForm.controls.name.value;
   this.customer.surname = this.updateForm.controls.surname.value;
   this.customer.dni = this.updateForm.controls.dni.value;

  this.customerService.modificarUser(this.customer).subscribe(resul =>{
    if(resul.mensaje != null){
      this.mensaje = resul.mensaje;
      this.error= true;
    }
    else if (resul != undefined){
      this.errorService.ActualizacionDatosCorrecta()//Muestra información con SweetAlert
    }
  },
  error => {
    if(error != null){
      this.errorService.ErrorPersonalizado(this.mensaje)
    }
  }
  );
  }


  Volver(){
    this.router.navigate(['/productos']);
  }

}
