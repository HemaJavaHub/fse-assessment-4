
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  findProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:9990/search').pipe(
      map(response=> response),
      catchError(this.handleError<any>())
    )
  }

  private handleError<T>(result?:T){
    return (error:any):Observable<T>=>{
      console.log('An error occured with SongService '+error)
      return null;
    }
  }
}
   
      
      
   
