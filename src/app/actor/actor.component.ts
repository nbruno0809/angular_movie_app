import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../model/Person';
import { MovieService } from '../services/movieService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  person: Person | undefined;

  constructor(private route: ActivatedRoute,private movieService :MovieService,private location: Location) {}

  ngOnInit() : void{
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.movieService.fetchPerson(+id).subscribe((p:any)=>{
        this.person=p as Person
      })
    }
    
  }

   goBack() {
    this.location.back()
  }
}
