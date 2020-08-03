import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestPageRoutingModule } from './latest-routing.module';

import { LatestPage } from './latest.page';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LatestPageRoutingModule,
        FlexLayoutModule
    ],
  declarations: [LatestPage]
})
export class LatestPageModule {}
