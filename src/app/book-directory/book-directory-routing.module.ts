import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDirectoryComponent } from './book-directory.component';

import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
// import { ViewBookComponent } from './view-book/view-book.component';


const routes: Routes = [
    {
        path: '',
        component: BookDirectoryComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'list-book-directory' },
          { path: 'list-book-directory', component: ListBookComponent },
          { path: 'add-book-directory', component: AddBookComponent },
          { path: 'edit-book-directory', component: EditBookComponent },  
        ]
      } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDirectoryRoutingModule { }
