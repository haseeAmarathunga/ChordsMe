import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchSinhalaPageRoutingModule } from './search-sinhala-routing.module';

import { SearchSinhalaPage } from './search-sinhala.page';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchSinhalaPageRoutingModule,
        FlexLayoutModule
    ],
  declarations: [SearchSinhalaPage]
})
export class SearchSinhalaPageModule {}
