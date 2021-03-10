import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginHomeRegistroModule } from './login-home-registro/login-home-registro.module';
import { DetallesProductosCarritoModule} from './detalles-productos-carrito/detalles-productos-carrito.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginHomeRegistroModule,
    DetallesProductosCarritoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
