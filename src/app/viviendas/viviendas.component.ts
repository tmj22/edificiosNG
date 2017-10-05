import { Component, OnInit } from '@angular/core';
import { Ivivienda } from 'app/vivienda'

@Component({
  selector: 'app-viviendas',
  templateUrl: './viviendas.component.html',
  styleUrls: ['./viviendas.component.css']
})
export class ViviendasComponent implements OnInit {
  titulo: string ="Listado de viviendas ";
  filtro_viviendas = "";
  viviendas: Ivivienda[] =[{
    "id": 1,
    "imagen":"/app/images/1.jpg",
    "title": "Vivienda 1",
    "precio": 400,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autatur. aborum.",
    "habitaciones": 4,
    "tipo": "alquiler",
    "favorito":false
  },
  {
    "id": 2,
    "imagen":"/app/images/2.jpg",
    "title": "Vivienda 2",
    "precio": 60000,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute int o id est laborum.",
    "habitaciones": 4,
    "tipo": "compra",
    "favorito":false
  },
  {
    "id": 3,
    "imagen":"/app/images/3.jpg",
    "title": "Vivienda 3",
    "precio": 400,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruoft laborum.",
    "habitaciones": 4,
    "tipo": "alquiler",
    "favorito":false
  },
  {
    "id": 4,
    "imagen":"/app/images/4.jpg",
    "title": "Vivienda 4",
    "precio": 600,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irulpa qdeseruaborum.",
    "habitaciones": 2,
    "tipo": "alquiler",
    "favorito":false
  },
  {
    "id": 5,
    "imagen":"/app/images/5.jpg",
    "title": "Vivienda 5",
    "precio": 50000,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    "habitaciones": 3,
    "tipo": "compra",
    "favorito":false
  },
  {
    "id": 6,
    "imagen":"/app/images/6.jpg",
    "title": "Vivienda 6",
    "precio": 350,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut rum.",
    "habitaciones": 2,
    "tipo": "alquiler",
    "favorito":false
  },
  {
    "id": 7,
    "imagen":"/app/images/7.jpg",
    "title": "Vivienda 7",
    "precio": 45000,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation t mollit anim id est laborum.",
    "habitaciones": 4,
    "tipo": "compra",
    "favorito":false
  },
  {
    "id": 8,
    "imagen":"/app/images/8.jpg",
    "title": "Vivienda 8",
    "precio": 40000,
    "descripcion":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatueserunt mollit anim id est laborum.",
    "habitaciones": 3,
    "tipo": "compra",
    "favorito":false
  }

  ]
  constructor() { }



  ngOnInit() {
  }

  onClickHeart(b:boolean){
    console.log(b);
  }

}
