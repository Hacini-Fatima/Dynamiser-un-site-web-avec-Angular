
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products-service';
import { FilterPipe } from '../filtrer-pipe'; 
import { SortPipe } from '../sort-by-price-pipe';


@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule, FilterPipe, SortPipe],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Product implements OnInit {

  products: any[] = []; 
  searchName: string = '';
  sortBy: string = 'nom';
  

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {} 

  ngOnInit(): void {
  this.productsService.getProducts().subscribe({
    next: (data) => {
      this.products = data; // 
      console.log('Produits chargés:', this.products.length); 
    },
    error: (err) => {  // gestion d'erreur
      console.error('Erreur chargement produits:', err);
    }
  });
}

  setSort(sortValue: string): void {
    this.sortBy = sortValue;
  }

 // La méthode qui fait le lien
viewProductDetails(productId: number): void {
  console.log('Navigation vers le produit:', productId);
  this.router.navigate(['/detail-product', productId]);
}
}