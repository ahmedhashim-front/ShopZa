import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  getSpacificProduct( id:string):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
