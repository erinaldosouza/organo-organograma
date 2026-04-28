import { Component, input } from '@angular/core';
import { BookCard } from '../book-card/book-card';
import { Gender } from '../book-card/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-gender',
  imports: [
    BookCard,
    CommonModule,
  ],
  templateUrl: './reading-gender.html',
  styleUrl: './reading-gender.css',
})
export class ReadingGender {

  gender = input.required<Gender>()

}
