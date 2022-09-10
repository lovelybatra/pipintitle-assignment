import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
 
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'book-directory', pathMatch: 'full' },
      {
        path: 'book-directory',
        loadChildren: () => import('./book-directory/book-directory.module').then(m => m.BookDirectoryModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
