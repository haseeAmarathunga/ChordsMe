import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchSinhalaPage } from './search-sinhala.page';

const routes: Routes = [
  {
    path: '',
    component: SearchSinhalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchSinhalaPageRoutingModule {}
