import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StoreService } from '../store.service';
import { Store } from '../store';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  @Input() store: Store;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStore();
  }

  getStore(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storeService.getStore(id)
      .subscribe(store => this.store = store);
  }

  goBack(): void {
    this.location.back();
  }
}
