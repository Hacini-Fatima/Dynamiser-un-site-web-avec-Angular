// detail-produit.ts - CORRIGÉ
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-detail-product',
  imports: [CommonModule],
  templateUrl: './detail-product.html',
  styleUrls: ['./detail-product.css']
})
export class DetailProduct implements OnInit {

  product: any = [];  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    

    this.productsService.getProductById(productId).subscribe({
      next: (data) => {
        this.product = data;
        console.log('Produit chargé:', this.product);
      },
      error: (err) => {
        console.error('Erreur chargement:', err);
        this.product = undefined;  // Pour déclencher le message "non trouvé"
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}