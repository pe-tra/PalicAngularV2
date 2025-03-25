import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = `https://dummyjson.com/products`;
  constructor(private http: HttpClient, private location: Location) {}

  getProductsInfo(
    limit: number = 20,
    skip: number = 0,
    search: string = '',
    category: string = ''
  ) {
    if (search) {
      if(category){
        var url: string = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${search}&${category}`;
      } else {
        var url: string = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${search}`;
      }
    } else {
      if(category){
        var url: string = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      } else {
        var url: string = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      }
    }
    return this.http.get(url);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any>('https://dummyjson.com/products/categories');
  }

  getProductsByCategory(category: string, limit: number = 20, skip: number = 0) {
    console.log('skip')
    return this.http.get(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  changeRoute(category: string) {
    this.location.replaceState(`/products/${category}`);
  }
}