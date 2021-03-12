import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { DetallesProductosCarritoRoutingModule } from './detalles-productos-carrito-routing.module';
import { DetallesProductosCarritoComponent } from './detalles-productos-carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [DetallesProductosCarritoComponent, ProductosComponent, DetallesUsuarioComponent, CarritoComponent],
  imports: [
    CommonModule,
    DetallesProductosCarritoRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class DetallesProductosCarritoModule { }


