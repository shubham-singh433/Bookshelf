import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  key: string = 'AIzaSyCnQuTnxmsv7ZJd8QQ7K1DQivFFRdSyWQA';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(
      'https://www.googleapis.com/books/v1/volumes?q=fiction&key=AIzaSyCnQuTnxmsv7ZJd8QQ7K1DQivFFRdSyWQA'
    );
  }
  getParticular(id: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${this.key}`
    );
  }
}
