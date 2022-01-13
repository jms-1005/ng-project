import { Component, OnInit } from '@angular/core';
//<app-home></app-home>
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  greetings = false;
  constructor() { }

  ngOnInit(): void {
  }

}
