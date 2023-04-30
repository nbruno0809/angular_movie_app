import { Component } from '@angular/core';
import { MovieService } from '../services/movieService';
import { MovieDemo } from '../model/MovieDemo';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})

export class PopularMoviesComponent {
  movies: MovieDemo[] = [];
  page = 1;

constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.page=1;
    this.movieService.fetchPopularMovies(this.page).subscribe((data :any) => {
      this.movies = data['results'];
    });
  }

  loadMore(): void {
    
    this.page++;
    this.movieService.fetchPopularMovies(this.page).subscribe((data :any) => {
      this.movies = [...this.movies,...data['results']];
    });
  }
}
