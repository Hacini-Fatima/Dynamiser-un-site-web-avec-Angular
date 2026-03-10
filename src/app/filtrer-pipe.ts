
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  
  transform(products: any[], searchText: string): any[] {
    // Si pas de produits, retourner tableau vide
    if (!products) return [];
    
    // Si searchText est vide ou null, retourner tous les produits
    if (!searchText || searchText.trim() === '') {
      return products;
    }

    searchText = searchText.trim().toLowerCase();

    return products.filter(product => {
      if (!product.name) return false;
      
      // Si une seule lettre, filtrer par première lettre
      if (searchText.length === 1) {
        return product.name.toLowerCase().charAt(0) === searchText;
      }
      
      // Sinon, recherche textuelle
      return product.name.toLowerCase().includes(searchText);
    });
  }
}