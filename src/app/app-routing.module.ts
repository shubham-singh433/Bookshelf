import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './module/books-module/component/book-list/book-list.component';
import { authgaurdGuard } from './authgaurd.guard';
import { loginGuard } from './login.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./module/books-module/books-module.module').then(
        (m) => m.BooksModuleModule
      ),
    canActivate: [authgaurdGuard],
  },
  // {
  //   path: 'books-list',
  //   component: BookListComponent,
  //   canActivate: [authgaurdGuard],
  // },
  {
    path: '',
    loadChildren: () =>
      import('./module/auth/auth.module').then((m) => m.AuthModule),
      canActivate:[loginGuard]
  },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./module/books-module/books-module.module').then(
  //       (m) => m.BooksModuleModule
  //     ),
  //   canActivate: [authgaurdGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
