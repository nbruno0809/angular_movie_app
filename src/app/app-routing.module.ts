import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { ActorComponent } from './actor/actor.component';
import { TopRateComponent } from './top-rate/top-rate.component';

const routes: Routes = [
  { path: '', component: PopularMoviesComponent  },
  { path: 'popular', component: PopularMoviesComponent  },
  { path: 'movie/:id', component: MovieDetailsComponent},
  { path:"search", component: SearchComponent },
  {path:"search/:query", component: SearchComponent},
  {path: "actor/:id", component: ActorComponent},
  { path: "toprated", component: TopRateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
