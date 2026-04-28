import { Component, OnInit } from '@angular/core';
import { ReadingGender } from '../reading-gender/reading-gender';
import { Book, Gender } from '../book-card/book';
import { BOOKS } from '../../book-mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [
    ReadingGender,
    CommonModule
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {

  genders: Gender[] = []
  bookGenderMap: Map<string, Book[]> = new Map()

  ngOnInit(): void {
    
    this.bookGenderMap = new Map()

    BOOKS.forEach((book) => {
      const genderId = book.gender.id
      if (!this.bookGenderMap.has(genderId)) {
        this.bookGenderMap.set(genderId, [])
      }

      this.bookGenderMap.get(genderId)?.push(book)
    })

    this.bookGenderMap.forEach((books: Book[], key: string) => {
      this.genders.push({
        id: key,
        value: books[0].gender.value,
        books: books 
      })
    })

    console.log(this.bookGenderMap)
  
  }
  
}
