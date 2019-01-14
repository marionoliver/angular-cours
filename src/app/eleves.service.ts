import { Injectable } from '@angular/core';
import { Eleve, eleves } from './store';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {

  constructor() { }

  list(): Array<Eleve> {
    return eleves;
  }

  add(eleve: Eleve) {
    eleves.push(eleve);
  }
}
