import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../model/Person';
import { MovieService } from '../services/movieService';
import { Location } from '@angular/common';
import { MovieRole } from '../model/MovieRole';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  person: Person | undefined;
  roles: MovieRole[]=[]

  constructor(private route: ActivatedRoute,private movieService :MovieService,private location: Location) {}

  ngOnInit() : void{
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.movieService.fetchPerson(+id).subscribe((p:any)=>{
        this.person=p as Person
      })

      this.movieService.fetchRoles(+id).subscribe((r:any)=>{
        this.roles = r["cast"] as MovieRole[]
        this.roles = this.roles.filter(a=>a.release_date!=="").sort((a,b)=>(a.release_date < b.release_date ? 1 : -1))
      })
    }
    
  }

   goBack() {
    this.location.back()
  }

  isAsc = false;
  toggleSort() {
    this.isAsc = !this.isAsc
    if (this.isAsc)
      this.roles = this.roles.sort((a,b)=>(a.release_date > b.release_date ? 1 : -1))
    else
      this.roles = this.roles.sort((a,b)=>(a.release_date < b.release_date ? 1 : -1))
  }

}
