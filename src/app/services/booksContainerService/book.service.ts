import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpservice: HttpService) { }
  
  getbooksApi( url :string){
    return this.httpservice.getBooks(`${url}`);
  }
  
}
