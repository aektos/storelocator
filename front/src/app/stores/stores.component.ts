import { Component, OnInit } from '@angular/core';
import { Store } from '../store';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  store: Store = {
    id: 1,
    name: 'La petite ressourcerie'
  };

  constructor() { }

  ngOnInit() {
  }

}
