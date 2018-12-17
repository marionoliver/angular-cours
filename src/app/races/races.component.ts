import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: any = [];
  constructor() { }

  ngOnInit() {
  }

  refreshRaces() {
    this.races = [{name: 'London'}, {name: 'Lyon'}];
  }
}
