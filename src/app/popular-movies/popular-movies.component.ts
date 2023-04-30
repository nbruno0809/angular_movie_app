import { Component } from '@angular/core';
import { MovieService } from '../services/movieService';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent {
  movies: any;

constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchPopularMovies().subscribe((data :any) => {
      this.movies = data['results'];
    });
  }
}
