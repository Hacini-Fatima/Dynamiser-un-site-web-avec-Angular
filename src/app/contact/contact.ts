import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  showSuccessMessage = false; // 

  onSubmit() {

    // Simuler l'envoi du formulaire
    setTimeout(() => {

      // Cacher le message après 5 secondes
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 1500);
  }
}