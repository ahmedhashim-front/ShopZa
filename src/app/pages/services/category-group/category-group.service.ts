import { CATEGORY_GROUPS } from './../../../shared/category-groups';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryGroupService {
  constructor(private http: HttpClient) {}

  getProductsByGroup(groupSlug: string): Observable<any[]> {
    const categories = CATEGORY_GROUPS[groupSlug];

    if (!categories || !categories.length) {
      return new Observable((observer) => {
        observer.next([]);
        observer.complete();
      });
    }

    const requests = categories.map((slug) =>
      this.http.get<any>(`https://dummyjson.com/products/category/${slug}`)
    );

    return forkJoin(requests).pipe(
      map((results) => results.flatMap((res) => res.products))
    );
  }
}
