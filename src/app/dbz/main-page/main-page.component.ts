import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  };

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  // personajes: Personaje[] = [];
  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Krillin',
  //     poder: 700
  //   },
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegeta',
  //     poder: 8500
  //   }
  // ];

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
    // this.personajes = this.dbzService.personajes;
  }

  // agregarNuevoPersonaje(arg: Personaje){
  //   // console.log('Main page');
  //   // console.log(arg);
  //   this.personajes.push(arg);
  // }

  // agregar(){ //event: any
  //   // event.preventDefault();
  //   if(this.nuevo.nombre.trim().length === 0) { return ; }

  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo);
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   };
  // }

  // cambiarNombre(event: any){
  //   console.log(event.target.value);
  // }
}
