import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/home/header/header.component';
import { BookCardComponent } from './components/home/book-card/book-card.component';
import { BookContainerComponent } from './components/home/book-container/book-container.component';
const routes: Routes = [
  
  {
    'path': 'header',
    component: HeaderComponent
  },
  {
    'path': 'bookcard',
    component: BookCardComponent,
  },
  {
    'path': 'bookscontainer',
    component: BookContainerComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
