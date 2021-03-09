import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginHomeRegistroModule } from './login-home-registro/login-home-registro.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    LoginHomeRegistroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
