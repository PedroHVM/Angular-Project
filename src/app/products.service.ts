import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }


getProductById(productId: number): Observable<any> {
  const apiUrl = `https://fakestoreapi.com/products/${productId}`;
  return this.httpClient.get<any>(apiUrl);
}

}
