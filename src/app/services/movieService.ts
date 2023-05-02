import { HttpClient } from "@angular/common/http";
import { API_KEY, API_URL } from "../API_DATA";
import { Injectable } from "@angular/core";
import { MovieDetails } from "../model/MovieDetails";

@Injectable({
    providedIn: 'root'
  })
export class MovieService {

    constructor(private http: HttpClient) { }

     fetchPopularMovies(page: number) {
        return this.http.get(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    }

    fetchMovieDetails(id: number) {
        return this.http.get<MovieDetails>(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    }

    fetchMoviePictures(id: number) {
        return this.http.get(`${API_URL}/movie/${id}/images?api_key=${API_KEY}&language=en`);
    }
}