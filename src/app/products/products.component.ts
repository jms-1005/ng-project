import { Component, OnInit } from '@angular/core';

//decorator
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = ['product1', 'product2', 'product3'];
  bannerimage = "new-banner.jpg";
  isTrue = false;


  constructor() { }

  onClick()
  {
    console.log("this button was clicked");
  }

  getMeProducts()
  {
    // products = http.get("api_url");
  }

  ngOnInit(): void {
  }

}
