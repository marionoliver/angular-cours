
import { ElevesService } from './../eleves.service';
import { Component, OnInit } from '@angular/core';
import { Eleve } from '../store';
import { filter, map } from 'rxjs/operators';

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
    const newEleves = new Array();
    this.elevesService.list().subscribe(
      eleve => newEleves.push(eleve)
    );
    this.eleves = newEleves;
  }

  filterMoreThanThirty() {
    const newEleves = new Array();
    this.elevesService.list().pipe(filter(eleve => eleve.age > 30)).subscribe(eleves => newEleves.push(eleves));
    this.eleves = newEleves;
  }

  justInititales() {
    const newEleves = new Array();
    this.elevesService.list().pipe(map(eleve => eleve.getInitiale())).subscribe(eleves => newEleves.push(eleves));
    this.eleves = newEleves;
  }


}
