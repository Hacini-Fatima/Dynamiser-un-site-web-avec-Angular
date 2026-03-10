import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  private socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      iconClass: 'fa-brands fa-facebook',
      title: 'Suivez-nous sur Facebook'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      iconClass: 'fa-brands fa-twitter',
      title: 'Suivez-nous sur Twitter'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      iconClass: 'fa-brands fa-instagram',
      title: 'Suivez-nous sur Instagram'
    }
  ];

  // récupérer les liens
  getSocialLinks() {
    return this.socialLinks;
  }

  // récupérer l'année
  getCurrentYear() {
    return new Date().getFullYear();
  }
}