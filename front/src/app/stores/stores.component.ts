import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { STORES } from '../mock-stores';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores = STORES;

  selectedStore: Store;
  onSelect(store: Store): void {
    this.selectedStore = store;
  }
  
  constructor() { }

  ngOnInit() {

  }

}
