import { Genre } from "./Genre";

export interface MovieDetails {
    id: number,
    budget:number,
    genres: Genre[],
    homepage: string | null,
    original_language: string,
    overview: string,
    poster_path: string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    title: string
}