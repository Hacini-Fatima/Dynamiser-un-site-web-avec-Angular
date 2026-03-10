import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortBy: string): any[] {
    console.log('Sort pipe appelé avec:', { products, sortBy });
    
    if (!products || !sortBy || products.length === 0) {
      return products;
    }

    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'nom':
          return a.name.localeCompare(b.name);
        case 'prix':
          return a.price - b.price;
        case 'prixDesc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }
}