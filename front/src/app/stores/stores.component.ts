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
    this.getHeroes();
  }

  getHeroes(): void {
    this.storeService.getStores()
      .subscribe(stores => this.stores = stores);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.storeService.addStore({ name } as Store)
      .subscribe(hero => {
        this.stores.push(hero);
      });
  }

  delete(store: Store): void {
    this.stores = this.stores.filter(h => h !== store);
    this.storeService.deleteStore(store).subscribe();
  }
}
