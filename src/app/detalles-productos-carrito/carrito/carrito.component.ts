import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Pedido } from '../../interfaces/pedidoInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  items = this.cartService.getItems();
  pedidoForm: FormGroup;

  pedido: Pedido = null

  total: number;

  constructor(private cartService: CarritoService) { }

  ngOnInit(): void {

    //Inicializamos el formulario
    this.pedidoForm = new FormGroup({
      direccion: new FormControl('', [Validators.required])
   })
  }

RealizarPedido(){

  this.items.forEach(producto => {
     this.total = this.total+producto.precio
  });

  this.pedido.direccion=this.pedidoForm.controls.direccion.value;
  this.pedido.total=this.total;
  this.pedido.productos=this.items;

  this.cartService.RealizarPedido(this.pedido);

}

}


