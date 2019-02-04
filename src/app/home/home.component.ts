import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private githubService: GithubService) { }

  ngOnInit() {}

  requestGithub() {
    this.githubService.getGithub().subscribe(
      result => {
        console.log(result);
      }
    );
  }
}
