import { HttpClient } from "@angular/common/http";
import { API_KEY, API_URL } from "../API_DATA";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class MovieService {

    constructor(private http: HttpClient) { }

     fetchPopularMovies() {
        return this.http.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    }
}