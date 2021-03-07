import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/prodcutoInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {


  productos: Producto[];

  constructor(private productoService: ProductoService, private router : Router) { }



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

  anadirProducto(){
    console.log('Hola');
  }

  Carrito(){
    this.router.navigate(['/carrito'])
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
