import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  title: string = 'Au Petit Village';
  presentation: string = 'Nous sommes une petite entreprise artisanale, passionnée par l\'histoire et la bande dessinée. Comme son nom l\'indique, notre atelier est un véritable petit village où règne la bonne humeur, la créativité et l\'amour du travail bien fait.';

  image: string = '/village-asterix.png';
}