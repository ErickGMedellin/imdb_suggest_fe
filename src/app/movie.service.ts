import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, catchError, map, of, tap} from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  private moviesUrl = 'api/movies'; //URL to web api

  getRandomMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      map(movies => this.shuffleArray(movies).slice(0, 3)),
      catchError(this.handleError<Movie[]>('getRandomMovies', []))
    );
  }

  getRandomMovie(): Observable<Movie> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      map(movie => this.shuffleArray(movie)[0]),
      catchError(this.handleError<Movie>('getRandomMovie'))
    );
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private handleError<T>(operation = 'operation', resutl?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(resutl as T);
    }
  }

}
