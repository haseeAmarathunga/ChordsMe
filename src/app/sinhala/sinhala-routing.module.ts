import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinhalaPage } from './sinhala.page';

const routes: Routes = [
  {
    path: '',
    component: SinhalaPage
  },
  {
    path: 'search-sinhala',
    loadChildren: () => import('./search-sinhala/search-sinhala.module').then( m => m.SearchSinhalaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinhalaPageRoutingModule {}
