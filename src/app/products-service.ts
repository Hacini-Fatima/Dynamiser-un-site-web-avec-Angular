// products-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  private productsCache$: Observable<any[]> | null = null;

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits avec cache
  getProducts(): Observable<any[]> {
    if (!this.productsCache$) {
      this.productsCache$ = this.http.get<any[]>('/assets/products.json').pipe(
        shareReplay(1) // Met en cache le résultat
      );
    }
    return this.productsCache$;
  }

  // Récupérer un produit par son ID (utilise le cache)
  getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  // vider le cache
  clearCache() {
    this.productsCache$ = null;
  }
}