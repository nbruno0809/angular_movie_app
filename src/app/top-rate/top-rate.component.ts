import { Component } from '@angular/core';
import { MovieDemo } from '../model/MovieDemo';
import { MovieService } from '../services/movieService';

@Component({
  selector: 'app-top-rate',
  templateUrl: './top-rate.component.html',
  styleUrls: ['./top-rate.component.css']
})
export class TopRateComponent {

  movies: MovieDemo[] = [];
  page = 1;

  constructor(private movieService: MovieService) {}

   ngOnInit(): void {
    this.page=1;
    this.movieService.fetchTopRated(this.page).subscribe((data :any) => {
      this.movies = data['results'];
      this.movies = this.movies.sort((a,b)=> (b.vote_average - a.vote_average))
    });
  }

  loadMore(): void {
    
    this.page++;
    this.movieService.fetchPopularMovies(this.page).subscribe((data :any) => {
      this.movies = [...this.movies,...data['results']];
    });
  }
}
