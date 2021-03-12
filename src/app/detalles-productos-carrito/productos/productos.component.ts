import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/prodcutoInterface';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  productos: Producto[];
  productoSeleccionado: Producto;
  public pa: number;

  constructor(private productoService: ProductoService, private router : Router, private cartService: CarritoService) { }



  ngOnInit(): void {
    this.ObtenerProductos();
  
  }

  //Obtiene todos los productos de la Base de Datos
  ObtenerProductos(){
    this.productos = [];
    this.productoService.GetProductos().subscribe(res =>{
      res.forEach (p =>{
        this.productos.push(p);
      })
    });

  }

  anadirProducto(producto){
    this.cartService.addToCart(producto);
    Swal.fire('Producto añadido al carrito')
  }

  Carrito(){
    this.router.navigate(['/carrito'])
  }
}
