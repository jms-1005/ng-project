import { Component, OnInit } from '@angular/core';
import { JokeServiceService } from '../joke-service.service';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  //initiate the jokesservice
  constructor(private jokesService: JokeServiceService) { }
  jokes:any[] = [];
  ngOnInit(): void {
    //run this block of code

    this.jokesService.getJokes().subscribe(res => {
      console.log(res.jokes);
      this.jokes = res.jokes;
    })

  }

}
