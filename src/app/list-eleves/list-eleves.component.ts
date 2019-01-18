
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
  eleves: any = null;

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
    // const newEleves = new Array();
    // this.elevesService.list().pipe(filter(eleve => eleve.age > 30)).subscribe(eleves => newEleves.push(eleves));
    // this.eleves = newEleves;
  }

  justInititales() {
    // const newEleves = new Array();
    // this.elevesService.list().pipe(map(eleve => eleve.getInitiale())).subscribe(eleves => newEleves.push(eleves));
    // this.eleves = newEleves;
  }

  resetFilter() {
    const newEleves = new Array();
    this.elevesService.list().subscribe(
      eleve => newEleves.push(eleve)
    );
    this.eleves = newEleves;
  }

}
