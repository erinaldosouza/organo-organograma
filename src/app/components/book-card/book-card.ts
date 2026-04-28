import { Component, input } from '@angular/core';
import { Book } from './book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {

  book = input.required<Book>();

  configFavorite() {
    this.book().isFavorite = !this.book().isFavorite
  }



}
