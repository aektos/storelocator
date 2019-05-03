import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '../store';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-new',
  templateUrl: './store-new.component.html',
  styleUrls: ['./store-new.component.css']
})
export class StoreNewComponent implements OnInit {

  constructor(private storeService: StoreService, private location: Location) { }

  ngOnInit() {
  }

  add(name: string, lat: number, lng: number): void {
    name = name.trim();
    if (!name && !lat && !lng) { return; }
    this.storeService.addStore({ name: name, lat: lat, lng: lng } as Store)
      .subscribe(() => {
        this.goBack()
      });
  }

  goBack(): void {
    this.location.back();
  }
}
