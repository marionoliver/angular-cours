import { Salle } from './salle.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Eleve } from './store';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const eleve1: Eleve = new Eleve(0, 'MBA1 Expert Web et Digital', 'Stéphant', 'Thomas', 21, 'filiere1', 'description1', 'pouet@pouet.fr');
    const eleve2: Eleve = new Eleve(1, 'MBA1 Expert Web et Digital', 'Deport', 'Antoine', 21, 'filiere2', 'description2', 'pouet@pouet.fr');
    const eleve3: Eleve = new Eleve(2, 'MBA1 Expert Web et Digital', 'Demay', 'Steeven', 12, 'filiere3', 'description3', 'pouet@pouet.fr');
    const eleve4: Eleve = new Eleve(3, 'MBA1 Expert Web et Digital', 'Olivier', 'Tom', 30, 'filiere4', 'description4', 'pouet@pouet.fr');
    const eleve5: Eleve = new Eleve(4, 'MBA1 Expert Web et Digital', 'Fougeray', 'Marie-Cécile', 2, 'filiere5', 'description5', 'pouet@pouet.fr');
    const eleve6: Eleve = new Eleve(5, 'MBA1 Expert Web et Digital', 'Oliver', 'Marion', 22, 'filiere6', 'description6', 'pouet@pouet.fr');
    const eleves = [eleve1, eleve2, eleve3, eleve4, eleve5, eleve6];

    const salle1: Salle = new Salle(0, 'salle1', 1, ['specialisation1', 'specialisation2']);
    const salle2: Salle = new Salle(1, 'salle2', 2, ['specialisation3', 'specialisation4']);
    const salle3: Salle = new Salle(2, 'salle3', 3, ['specialisation5', 'specialisation6']);
    const salle4: Salle = new Salle(3, 'salle4', 4, ['specialisation7', 'specialisation8']);
    const salle5: Salle = new Salle(4, 'salle5', 5, ['specialisation9', 'specialisation1']);
    const salles = [salle1, salle2, salle3, salle4, salle5];
    return {eleves, salles};
  }

  genId<T extends Eleve | Salle>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
  }
}
