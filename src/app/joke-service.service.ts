import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {

  private url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10"

  // this is the first block of code that is executed in a class
  constructor(private http: HttpClient) { }

  getJokes(){
    return this.http.get<any>(this.url);
  }

}
