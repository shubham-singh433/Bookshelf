import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './component/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { BookServiceService } from './service/book-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksItemComponent } from './component/books-item/books-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchItemComponent } from './component/search-item/search-item.component';
import { FilterPipe } from './pipe/filter.pipe';
import {authgaurdGuard} from '../../authgaurd.guard'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate = [authgaurdGuard],
  },
  // { path: 'bookslist', component: BookListComponent },
  {
    path: '',
    component: HomeComponent,

    children: [
      { path: 'books-list', component: BookListComponent },
      { path: 'books-deatils/:id', component: BookDetailComponent },
      { path: 'books-item', component: BooksItemComponent },
      { path: 'search-item', component: SearchItemComponent },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [
    BookListComponent,
    NavbarComponent,
    HomeComponent,
    BookDetailComponent,
    BooksItemComponent,
    SearchItemComponent,
    FilterPipe,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  // providers: [BookServiceService],
})
export class BooksModuleModule {}
