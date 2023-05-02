import { Component } from '@angular/core';
import { MovieDetails } from '../model/MovieDetails';
import { MovieService } from '../services/movieService';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormatService } from '../services/formatService';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: MovieDetails | null =  null;
  imgPaths: string[]=[];
  MAX_IMG_COUNT = 12;

  constructor(
    private movieService: MovieService,
    public formatService: FormatService,
    private  route: ActivatedRoute,
    private location: Location
    ) {}

   ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
    this.movieService.fetchMovieDetails(+id).subscribe((data : MovieDetails) => {
      this.movie = data as MovieDetails;
      console.log(this.movie)
    });

    this.movieService.fetchMoviePictures(+id).subscribe((data : any) => {
      let b = data["backdrops"];
      for (let i = 0;i<b.length && i<this.MAX_IMG_COUNT;i++) {
        this.imgPaths.push(b[i].file_path)
      }
    })
  }
  }

  goBack() {
    this.location.back()
  }

}
