import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  @Input() store: Store;

  constructor() { }

  ngOnInit() {
  }

}
