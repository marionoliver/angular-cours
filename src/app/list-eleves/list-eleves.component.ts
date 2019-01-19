
import { ElevesService } from './../eleves.service';
import { Component, OnInit } from '@angular/core';
import { Eleve } from '../store';
import { filter, map, flatMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-eleves',
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css']
})
export class ListElevesComponent implements OnInit {
  eleves: Eleve[] = null;
  justInitiales: Boolean = false;

  constructor(private elevesService: ElevesService) { }

  ngOnInit() {
    this.elevesService.list().subscribe(
      eleves => {
        this.eleves = eleves;
        this.elevesService.eleves.next(this.eleves);
      }
    );
  }

  filterMoreThanThirty() {
    this.elevesService.list().pipe(
      map(eleves => eleves.filter(eleve => eleve.age > 30))
      ).subscribe(eleves => {
        this.eleves = eleves;
        this.justInitiales = false;
      }
    );
  }

   filterJustInitiales() {
     this.justInitiales = true;
  // pas optimisé dans ce cas donc utilisation d'une autre méthode
  //   this.elevesService.list().pipe(
  //       map(eleve => eleve.getInitiale())
  //     ).subscribe(eleves => eleves);
   }

  resetFilter() {
    this.elevesService.list().subscribe(
      eleves => {
        this.eleves = eleves;
        this.justInitiales = false;
      }
    );
  }

}
