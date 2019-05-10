import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  public products: Product[];
  filterproducts: Product[];
  productResults:Product[];
  searchText:string;

  constructor(private productService:ProductService) { }

  searchProducts(){
    this.productService.findProducts()
        .subscribe((response)=>this.productResults = response);
  }

  findProductsByBrand(brand:string){
    if(brand!=null){
        return this.products.filter(p => p.brand == brand);
      }
      else{
        return this.products.filter(p => p.brand == brand);
      }
    }

  findProductsByColor(color:string){
    if(color!=null){
      return this.products.filter(p => p.color == color);
    }
    else{
      return this.products.filter(p => p.color == color);
    }
  }


  findProductsByPrice(price:number){
    if(price!=null){
      return this.products.filter(p => p.price == price);
    }
    else{
      return this.products.filter(p => p.price == price);
    }
  }

  ngOnInit() {

    this.productService. findProducts().subscribe((response)=>{
      this.products = response;
   
    });
  }

}
