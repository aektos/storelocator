import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Store } from './store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stores = [
      { id: 11, name: 'The zero waste shop', lat: 43.675819, lng: 7.289429 },
      { id: 12, name: 'Vegan shop', lat: 43.675819, lng: 7.289429 },
      { id: 13, name: 'La petite ressourcerie', lat: 43.675819, lng: 7.289429 }
    ];
    return {stores};
  }

  // Overrides the genId method to ensure that a store always has an id.
  // If the stores array is empty,
  // the method below returns the initial number (11).
  // if the stores array is not empty, the method below returns the highest
  // store id + 1.
  genId(stores: Store[]): number {
    return stores.length > 0 ? Math.max(...stores.map(store => store.id)) + 1 : 11;
  }
}