import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { ProductsComponent } from './products/products.component';

//It takes a list of objects
const routes: Routes = [

  { path: "home", component: HomeComponent},
  { path: "", component: HomeComponent},
  { path: "products", component: ProductsComponent},
  { path: "jokes", component: JokesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
