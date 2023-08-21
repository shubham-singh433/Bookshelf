import { Injectable } from '@angular/core';
import { Books } from '../books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  newdata!: any;
  data!: any;
  dataobj!: any;
  books: Books[] = [];
  key: string = 'AIzaSyCqsdjvwH9FGuni2XsTu-KkVmjHgA0Fltw';
  username!: string;
  constructor(private http: HttpClient) {}

  getUsername() {
    return this.username;
  }

  //set user in local storage
  setUser(key: string): void {
    // console.log(this.username);
    localStorage.setItem(key, JSON.stringify(this.books));
  }
  logout() {
    this.username = '';
  }
  //get user data local storage
  isRegistered(key: string) {
    this.username = key;
    // console.log(this.username);
    if (localStorage.getItem(key)) {
      return true;
    } else {
      return false;
    }
  }

  getParticular(id: string) {
    // console.log(this.username);
    this.http
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${this.key}`)
      .subscribe((res) => {
        this.data = res;
        this.dataobj = {
          id: this.data?.id,
          title: this.data?.volumeInfo?.title,
          author: this.data?.volumeInfo?.author,
          genre: this.data?.volumeInfo?.categories,
          description: this.data?.volumeInfo?.description,
        };
        
          this.books.push(this.dataobj);
          let storedData = localStorage.getItem(this.username);
          if (storedData) {
            this.books = JSON.parse(storedData);
            let search = this.books.find((value) => value.id == id);
            if (!search) {
              this.books.push(this.dataobj);
              localStorage.setItem(this.username, JSON.stringify(this.books));
            }
          }
          this.books = [];
        
      });
  }

  getFavorite(username: string) {
    return localStorage.getItem(this.username);
  }

  deleteFavorite(id: string) {
    const stringdata = localStorage.getItem(this.username);
    if (stringdata) {
      this.newdata = JSON.parse(stringdata);
    }

    if (this.newdata) {
      this.newdata = this.newdata.filter((item: { id: string }) => {
        return item.id != id;
      });
    }
    localStorage.setItem(this.username, JSON.stringify(this.newdata));
    return this.newdata;
  }
}
