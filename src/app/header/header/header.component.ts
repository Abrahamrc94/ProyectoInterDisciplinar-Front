import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/customer.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }


  DatosPersonales(){
    this.router.navigate(['detalles'])
  }


 CerrarSesion(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
