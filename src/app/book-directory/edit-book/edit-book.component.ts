
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '.././../provider/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  bookForm!: FormGroup;
  bookDataStore: any;
  rows : any
  constructor(public formBuilder: FormBuilder, public router: Router,
    private BookService: BookService) {
    this.bookDataStore = this.BookService.bookData;
  
  }

  ngOnInit(): void {
    this.addFromBinding();
    this.patchVinding();
  }

  addFromBinding() {
    this.bookForm = this.formBuilder.group({
      book_id  : ['',Validators.required],
      bookName: ['', Validators.required],
      bookAuthor: ['', Validators.required],
      price: ['1', Validators.required],
      totalQty: ['1', Validators.required],
    })
  }
  patchVinding() {
    this.bookForm.patchValue({
      book_id : this.bookDataStore.book_id,
      bookName: this.bookDataStore.bookName,
      bookAuthor: this.bookDataStore.bookAuthor,
      price: this.bookDataStore.price,
      totalQty: this.bookDataStore.totalQty,
    })
  }

  get bookid() {return this.bookForm.get('book_id');}
  get bookName() { return this.bookForm.get('bookName'); }
  get bookAuthor() { return this.bookForm.get('bookAuthor'); }
  get price() { return this.bookForm.get('price'); }
  get totalQty() { return this.bookForm.get('totalQty'); }




  submitBook() {
   console.log(this.bookForm.value.book_id)
 
   let data= this.BookService.getBook()
   if(data)
   {
    this.rows=JSON.parse(data)
    const index= this.rows.findIndex((item : any)=>item.book_id==this.bookForm.value.book_id)
    if(index!=-1)
    {
      this.rows[index].book_id=this.rows[index].book_id
      this.rows[index].bookName=this.bookForm.value.bookName
      this.rows[index].bookAuthor=this.bookForm.value.bookAuthor
      this.rows[index].price=this.bookForm.value.price
      this.rows[index].totalQty=this.bookForm.value.totalQty
      localStorage.setItem('bookdata',JSON.stringify(this.rows))
      this.goback()
    }

    else{
      alert("There is no book in our storage")
    }
   

   }
   else{
    alert("There is no book in our storage")
   }

  }
  goback() {
    this.router.navigate(['/book-directory/list-book-directory'])
  }
}
