import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule
  ]
})
export class LoginHomeRegistroModule { }
