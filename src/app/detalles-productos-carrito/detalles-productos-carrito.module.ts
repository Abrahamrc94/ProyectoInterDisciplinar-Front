import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { DetallesProductosCarritoRoutingModule } from './detalles-productos-carrito-routing.module';
import { DetallesProductosCarritoComponent } from './detalles-productos-carrito.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [DetallesProductosCarritoComponent, ProductosComponent],
  imports: [
    CommonModule,
    DetallesProductosCarritoRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class DetallesProductosCarritoModule { }


