import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie'; 
import { MovieService } from '../movie.service';
import { NgFor } from '@angular/common';
import { MovieComponent } from '../movie/movie.component';
import { MainLogoComponent } from '../main-logo/main-logo.component';

@Component({
  selector: 'app-suggestions-list',
  standalone: true,
  imports: [
    NgFor,
    MovieComponent,
    MainLogoComponent
  ],
  templateUrl: './suggestions-list.component.html',
  styleUrl: './suggestions-list.component.css'
})
export class SuggestionsListComponent implements OnInit{

  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
  ) {};

  ngOnInit(): void {
    this.getRandomMovies();
  }

  getRandomMovies(): void {
    this.movieService.getRandomMovies()
      .subscribe(movies => this.movies = movies);
  }

}
