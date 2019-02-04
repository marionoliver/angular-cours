
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(public http: HttpClient) {}

  getGithub() {
    return this.http.get('https://api.github.com/pouet');
  }
}
