import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl:any;
  bookData:any;
  constructor(public http:HttpClient) { 
    this.apiUrl=environment.apiUrl;
  }
 data: any 

  
  getBook() {
    this.data=localStorage.getItem('bookdata')
    return this.data
  }

}

