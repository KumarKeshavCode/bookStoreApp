import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book : any;

  imagePaths : string []=[
    '../../../../assets/booksImg/Book1.png',
    '../../../../assets/booksImg/Book2.png',
    '../../../../assets/booksImg/Book3.png',
    '../../../../assets/booksImg/Book4.png',
    '../../../../assets/booksImg/Book5.png',
    '../../../../assets/booksImg/Book6.png',
    '../../../../assets/booksImg/Book7.png',
    '../../../../assets/booksImg/Book8.png',
    '../../../../assets/booksImg/Book9.png',
    '../../../../assets/booksImg/Book10.png',
    '../../../../assets/booksImg/Book11.png',

  ]

  imagePath: string ='';

  constructor(){}

  ngOnInit(): void{
    this.imagePath=this.getRandomImagePath();

  }

  getRandomImagePath(){
    let index=Math.floor(Math.random()*this.imagePaths.length);
    return this.imagePaths[index];
  }
  

}
