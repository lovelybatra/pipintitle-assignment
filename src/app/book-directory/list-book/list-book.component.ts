import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '.././../provider/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  rows: any;
  constructor(
    private router: Router,
    private BookService: BookService
  ) {
    this.rows = [];

  }
  ngOnInit(): void {
    this.rows = [];
    this.getBook()
  }
  
  getBook() {
    let data = this.BookService.getBook()
    if (data) {
      this.rows = JSON.parse(data)

    } else {
      this.rows = [];
    }
  

  }
  addNavigate() {
    this.router.navigate(['/book-directory/add-book-directory'])
  }
  deletebook(id: any) {
    confirm("Your want delete this book");
    {

      const index = this.rows.findIndex((item: any) => item.book_id == id)
      if (index != -1) {
        this.rows.splice(index, 1)
        localStorage.setItem('bookdata', JSON.stringify(this.rows))
        this.getBook()
       
      }
      else {
        alert("This book does not exist")
      }
    }

  }

  editHandle(row: any) {
    this.BookService.bookData = { ...row }
    this.router.navigate(['/book-directory/edit-book-directory'])

  }
}