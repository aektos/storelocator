import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from './store';
import { STORES } from './mock-stores';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private messageService: MessageService) { }

  getStores(): Observable<Store[]> {
    // TODO: send the message _after_ fetching the stores
    this.messageService.add('StoreService: fetched stores');
    return of(STORES);
  }
}
