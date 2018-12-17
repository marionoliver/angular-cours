import { Component, OnInit } from '@angular/core';
import { Eleve, eleves } from '../store';

@Component({
  selector: 'app-list-eleves',
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css']
})
export class ListElevesComponent implements OnInit {
  eleves: Array<Eleve> = eleves;

  constructor() { }

  ngOnInit() {
  }

}
