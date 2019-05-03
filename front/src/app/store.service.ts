import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Store } from './store';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private storesUrl = 'api/stores';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getStores(): Observable<Store[]> {
    // TODO: send the message _after_ fetching the stores
    this.messageService.add('StoreService: fetched stores');
    return this.http.get<Store[]>(this.storesUrl)
      .pipe(
        tap(_ => this.log('fetched stores')),
        catchError(this.handleError<Store[]>('getStores', []))
      );
  }

  /** GET store by id. Will 404 if id not found */
  getStore(id: number): Observable<Store> {
    const url = `${this.storesUrl}/${id}`;
    return this.http.get<Store>(url).pipe(
      tap(_ => this.log(`fetched store id=${id}`)),
      catchError(this.handleError<Store>(`getStore id=${id}`))
    );
  }

  /** PUT: update the store on the server */
  updateStore(store: Store): Observable<any> {
    return this.http.put(this.storesUrl, store, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${store.id}`)),
      catchError(this.handleError<any>('updateStore'))
    );
  }

  /** POST: add a new store to the server */
  addStore(store: Store): Observable<Store> {
    return this.http.post<Store>(this.storesUrl, store, httpOptions).pipe(
      tap((newStore: Store) => this.log(`added hero w/ id=${newStore.id}`)),
      catchError(this.handleError<Store>('addStore'))
    );
  }

  /** DELETE: delete the store from the server */
  deleteStore(store: Store | number): Observable<Store> {
    const id = typeof store === 'number' ? store : store.id;
    const url = `${this.storesUrl}/${id}`;

    return this.http.delete<Store>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted store id=${id}`)),
      catchError(this.handleError<Store>('deleteStore'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StoreService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StoreService: ${message}`);
  }
}
