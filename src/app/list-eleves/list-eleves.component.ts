
import { ElevesService } from './../eleves.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Eleve } from '../store';


@Component({
  selector: 'app-list-eleves',
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css']
})
export class ListElevesComponent implements OnInit {
  eleves: Array<Eleve> = null;

  constructor(private elevesService: ElevesService) {
  }

  ngOnInit() {
    this.elevesService.list().subscribe(
      eleves => this.eleves = eleves
    );
  }
}
