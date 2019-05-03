import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores: Store[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getStores();
  }

  getStores(): void {
    this.storeService.getStores()
      .subscribe(stores => this.stores = stores);
  }

  delete(store: Store): void {
    this.stores = this.stores.filter(h => h !== store);
    this.storeService.deleteStore(store).subscribe();
  }
}
