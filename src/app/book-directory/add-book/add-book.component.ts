import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../provider/book.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  rows: any[]=[];
  constructor(public router: Router, public formBuilder: FormBuilder,private service : BookService
  ) { }

  ngOnInit(): void {
    this.addFromBinding();
    this.getBook();
  }

  getBook() {
   let data= this.service.getBook()
      if (data) {
        this.rows = JSON.parse(data)
  
      } else {
        this.rows = [];
      }
      console.log("books",this.rows)
  }
  addFromBinding() {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      bookAuthor: ['', Validators.required],
      price: ['1', Validators.required],
      totalQty: ['1', Validators.required],
    })
  }
  get bookName() { return this.bookForm.get('bookName'); }
  get bookAuthor() { return this.bookForm.get('bookAuthor'); }
  get price() { return this.bookForm.get('price'); }
  get totalQty() { return this.bookForm.get('totalQty'); }




  submitBook() {

    if(this.rows.length==0){
      this.bookForm.value.book_id=1
      this.rows.push(this.bookForm.value);
      localStorage.setItem("bookdata", JSON.stringify(this.rows))
    }else{
      this.bookForm.value.book_id=this.rows.length+1
      this.rows.push(this.bookForm.value);
      localStorage.setItem("bookdata", JSON.stringify(this.rows))
   
    }
    this.goback();
  }
  goback() {
    this.router.navigate(['/book-directory/list-book-directory'])
  }

}
