import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login-home-registro/componentes/home/home.component';
import { LoginComponent } from './login-home-registro/componentes/login/login.component';
import { RegistroComponent } from './login-home-registro/componentes/registro/registro.component';
import { ProductosComponent } from './detalles-productos-carrito/productos/productos.component';
import { CarritoComponent } from './detalles-productos-carrito/carrito/carrito.component';
import { DetallesComponent } from './detalles-productos-carrito/detalles/detalles.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent, canActivate: [LoginGuardGuard]},
  {path: 'detalles', component: DetallesComponent, canActivate: [LoginGuardGuard]},
  {path: 'carrito', component: CarritoComponent, canActivate: [LoginGuardGuard]},
  { path: 'detalles-productos-carrito', loadChildren: () => import('./detalles-productos-carrito/detalles-productos-carrito.module').then(m => m.DetallesProductosCarritoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
