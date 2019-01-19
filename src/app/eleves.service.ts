import { InMemoryDataService } from './in-memory-data.service';
import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { Eleve } from './store';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  private elevesUrl = '/api/eleves';

  public eleves = new BehaviorSubject<Eleve[]>([]);

  constructor(private http: HttpClient, private notificationService: NotificationService, private memoryService: InMemoryDataService) {}

  list(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.elevesUrl)
      .pipe(
        tap(_ => this.log('fetched eleves')),
        catchError(this.handleError('getEleves', []))
      );
  }

  add(eleve: Eleve) {
    return this.http.post<Eleve>(this.elevesUrl, eleve, httpOptions)
    .pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((eleve: Eleve) => this.log(`added eleve w/ id=${eleve.id}`)),
      catchError(this.handleError<Eleve>('addEleve'))
    );
  }

  get(eleveId: number): Observable<Eleve> {
    const url = `${this.elevesUrl}/${eleveId}`;
    return this.http.get<Eleve>(url).pipe(
      tap(_ => this.log(`fetched eleve eleveId=${eleveId}`)),
      catchError(this.handleError<Eleve>(`getEleve eleveId=${eleveId}`))
    );
  }

  update(eleve: Eleve): any {
    return this.http.put(this.elevesUrl, eleve, httpOptions).pipe(
      tap(_ => this.log(`updated eleve id=${eleve.id}`)),
      catchError(this.handleError<any>('updateEleve'))
    );
  }

  delete (eleve: Eleve | number): Observable<Eleve> {
    const id = typeof eleve === 'number' ? eleve : eleve.id;
    const url = `${this.elevesUrl}/${id}`;

    return this.http.delete<Eleve>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted eleve id=${id}`)),
      catchError(this.handleError<Eleve>('deleteEleve'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote this.logging infrastructure
      console.error(error); // this.log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.notificationService.add(`EleveService: ${message}`);
  }
}
