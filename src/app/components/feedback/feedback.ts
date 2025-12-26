import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {
  constructor(private router: Router) {}

  feedback = {
    name: '',
    email: '',
    type: '',
    subject: '',
    message: '',
    rating: 0
  };

  onSubmit() {
    console.log('Feedback submitted:', this.feedback);
    alert('Thank you for your feedback!');
    this.router.navigate(['/']);
  }

  setRating(rating: number) {
    this.feedback.rating = rating;
  }
}
