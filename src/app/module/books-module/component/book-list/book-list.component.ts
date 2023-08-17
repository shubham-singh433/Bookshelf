import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../service/book-service.service';
import { UserService } from '../../../../service/user.service';
import { Books } from '../../../../books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  Details: Books[] = [];

  items: number = 3;
  length!: number;
  page: number = 1;
  data!: any;
  constructor(
    private http: BookServiceService,
    private user: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let username = this.user.getUsername();
    if (!username) {
      this.route.navigate(['/login']);
    }

    this.http.getData().subscribe((value) => {
      this.data = value;
      this.data = this.data.items;
      this.length = this.data.length;
      // console.log(this.length);
      // console.log(this.data);
    });
  }
  handlePageEvent(event: any) {
    this.items = event.pageSize;
    if (this.length < this.items) {
      this.page = 1;
    }
    // console.log(event);
  }
  Additem(id: string): void {
    this.user.getParticular(id);
  }
}
