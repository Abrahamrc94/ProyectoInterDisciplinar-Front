import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginHomeRegistroModule } from './login-home-registro/login-home-registro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginHomeRegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
