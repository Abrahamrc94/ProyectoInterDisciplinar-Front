import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule
  ]
})
export class LoginHomeRegistroModule { }
