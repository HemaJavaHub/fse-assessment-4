import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'productdisplay',
    component: ProductSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
