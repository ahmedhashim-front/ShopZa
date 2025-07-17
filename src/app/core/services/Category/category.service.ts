import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/categories`);
  }
  getCategoryByName(name: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/category/${name}`);
  }
}
