import { Component } from '@angular/core';
import { BookService } from 'src/app/services/booksContainerService/book.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent {

  booksList:any[]=[];
  filterProductList:any[]=[];

  constructor(private bookservice:BookService){};

  ngOnInit() :void {
    this.bookservice.getbooksApi('/bookstore_user/get/book').subscribe({
      next :(Response :any)=>{
        this.booksList=Response.result;
        this.filterProductList=[...this.booksList];
        console.log(Response);
      },
      error :(error :any)=>{
        console.log(error);
      }
    })
  }

}
