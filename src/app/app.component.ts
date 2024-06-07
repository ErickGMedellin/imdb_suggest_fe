import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list.component';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SuggestionsListComponent,
    MovieComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imdb-suggest';
}
