import { Component } from '@angular/core';
import { MovieDemo } from '../model/MovieDemo';
import { MovieService } from '../services/movieService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  resultMovies: MovieDemo[] = [];
  queryString: string ="";
  page: number = 1;
  maxPage: number | undefined = undefined;

constructor(private movieService: MovieService, private  route: ActivatedRoute, private router: Router) {}

  ngOnInit() : void{
    this.page = 1;
    this.queryString = this.route.snapshot.paramMap.get("query") ?? "";
    console.log(this.queryString)
    if (this.queryString !== "") {
     this.onSearch() 
    }
  }

  onSearch() {
    this.router.navigateByUrl("/search"+(this.queryString !== "" ? "/"+this.queryString : ""))
    this.movieService.fetchSearchedMovies(this.queryString,this.page).subscribe((result: any)=>{
      this.resultMovies = result["results"]
      this.maxPage = result["total_pages"]
    })
  }

  onChange(event: any) {
    this.queryString = event.target.value;
  }

  changePage(forward: boolean) {
    if (forward && this.page+1<=this.maxPage!!) {
      this.page++;
    } else if(!forward && this.page-1>=0){
      this.page--;
    }
    this.onSearch()
  }
}
