import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent }      from './stores/stores.component';
import { StoreDetailComponent }  from './store-detail/store-detail.component';
import { StoresMapComponent }      from './stores-map/stores-map.component';
import { StoreNewComponent }      from './store-new/store-new.component';

const routes: Routes = [
  { path: '', component: StoresMapComponent, pathMatch: 'full' },
  { path: 'stores', component: StoresComponent },
  { path: 'store/detail/:id', component: StoreDetailComponent },
  { path: 'store/new', component: StoreNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
