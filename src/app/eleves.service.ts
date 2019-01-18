import { Injectable } from '@angular/core';
import { Eleve, eleves } from './store';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  constructor() { }

  list(): Observable<Eleve> {
    return from(eleves);
  }

  add(eleve: Eleve) {
    eleves.push(eleve);
  }

  get(eleveId: number): Observable<Eleve> {
    return of(eleves[eleveId]);
  }
}
