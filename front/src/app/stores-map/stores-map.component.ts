import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { StoreService } from '../store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as L from 'leaflet';

@Component({
  selector: 'app-stores-map',
  templateUrl: './stores-map.component.html',
  styleUrls: ['./stores-map.component.css']
})
export class StoresMapComponent implements OnInit {
  stores: Store[];

  constructor(private storeService: StoreService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.drawMap();
  }

  getStores(): Observable<Store[]> {
    return this.storeService.getStores()
      .pipe(map(stores => this.stores = stores));
  }

  drawMap(): void {
    this.getStores().subscribe(() => {
      var map = L.map('map').setView([43.675819, 7.289429], 4);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      this.stores.forEach(function (s) {
        s.name = s.name ? decodeURI(s.name.replace(/\+/g, ' ')) : 'NA';
        var msg = "<h5>" + s.name + "</h5>";
        L.marker([s.lat, s.lng]).addTo(map)
          .bindPopup(msg);
      });
    });
  }
}
