import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from '../guards/login-guard.guard';
import { DetallesProductosCarritoComponent } from './detalles-productos-carrito.component';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

const routes: Routes = [{ path: '', component: DetallesProductosCarritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesProductosCarritoRoutingModule { }
