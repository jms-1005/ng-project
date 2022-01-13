import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  _liked = false;
  _likesCount = 100;
  constructor() { }

  ngOnInit(): void {
  }

  like(){
    this._liked = !this._liked;
    if(this._liked)
      this._likesCount++
    else
      this._likesCount--
  }

}
