import { Component, Input} from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  // constructor(private movieService: MovieService) {};

  // movie: Movie | undefined;

  // ngOnInit(): void {
  //     this.getMovie();
  // }

  // getMovie(): void {
  //   this.movieService.getRandomMovie()
  //     .subscribe(movie => this.movie = movie);
  // }

  @Input() movie?: Movie;

}
