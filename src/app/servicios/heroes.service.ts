
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Paolo Guerrero",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/guerrero.png",
      posicion: "delantero",
      edad: 25,
      camiseta: 9,
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Jefferson Farfán",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/farfan.jpg",
      posicion: "delantero",
      edad: 25,
      camiseta: 10,
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Marcos Lopez",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/lopez.jpg",
      posicion: "volante",
      edad: 25,
      camiseta: 14,
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Sergio Peña",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/peña.jpg",
      posicion: "volante",
      edad: 25,
      camiseta: 23,
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Gianluca Lapadula",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/lapadula.png",
      posicion: "delantero",
      edad: 25,
      camiseta: 9,
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Yoshimar Yotun",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/yotun.jpg",
      posicion: "medio",
      edad: 25,
      camiseta: 7,
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Renato Tapia",
      bio: "Jugador de la seleccion Peruana de Futbol",
      img: "assets/img/tapia.jpg",
      posicion: "volante",
      edad: 25,
      camiseta: 13,
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: any ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  posicion: string,
  edad: number,
  camiseta: number,
  casa: string;
  idx?: number;
};
