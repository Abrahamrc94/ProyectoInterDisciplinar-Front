import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedidoInterface';
import { Producto } from '../interfaces/prodcutoInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  items: Producto[];

  constructor(private http: HttpClient) { 
    this.items = [];
   }


  addToCart(producto){
    this.items.push(producto);
  }

  getItems(){
    return this.items;
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  // RealizarPedido(pedido: Pedido): Observable<any>{
  //   //return this.http.post<Pedido>(environment.apiUrl + '/customer' + this,localStorage.getItem('id'), this.pedido);
  // }
}
