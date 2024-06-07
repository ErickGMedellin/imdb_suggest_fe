import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb() {

    const movies = [
      {id: 1, name: 'Jurassic Park', year: 1993, director: 'Steven Spielberg', rating: 8.2},
      {id: 2, name: 'Napoleon Dynamite', year: 2004, director: 'Jared Hess', rating: 7.0},
      {id: 3, name: 'Enemy', year: 2013, director: 'Denis Villeneuve', rating: 6.9},
      {id: 4, name: 'Spirited Away', year: 2001, director: 'Hayao Miyazaki', rating: 8.6},
      {id: 5, name: 'Her', year: 2013, director: 'Spike Jonze', rating: 8.0},
      {id: 6, name: 'Ex Machina', year: 2014, director: 'Alez Garland', rating: 7.7},
      {id: 7, name: 'Back To The Future', year: 1985, director: 'Robert Zemeckis', rating: 8.5}
    ];

    return {movies};
  }    

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1: 11;
  }
}
