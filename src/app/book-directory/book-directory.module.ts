import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDirectoryComponent } from './book-directory.component';

import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookDirectoryRoutingModule } from './book-directory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BookDirectoryComponent,
 
    AddBookComponent,
    EditBookComponent,
    ListBookComponent
  ],
  imports: [
    CommonModule,BookDirectoryRoutingModule ,FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class BookDirectoryModule { }
