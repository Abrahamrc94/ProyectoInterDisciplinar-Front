import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/prodcutoInterface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

  productos: Producto[];

  //Trae todos los productos del back
  GetProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(environment.apiUrl + '/producto');
  }

}
