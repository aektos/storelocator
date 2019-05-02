import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { STORES } from '../mock-stores';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores: Store[];
  selectedStore: Store;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(store: Store): void {
    this.selectedStore = store;
  }

  getHeroes(): void {
    this.storeService.getStores()
      .subscribe(stores => this.stores = stores);
  }

}
