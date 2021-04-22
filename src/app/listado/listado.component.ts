import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listaProduct: Product[] = [
    new Product('01', 'Tablet', 100000),
    new Product('02', 'Notebook', 280000),
    new Product('03', 'Celular', 120000),
    new Product('04', 'PC Escritorio', 350000),
    new Product('05', 'SmartWatch', 150000)
  ]

}

class Product {

  constructor(public codigo: string, public descripcion: string, public precio: number){

  }
}
