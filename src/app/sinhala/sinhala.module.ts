import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinhalaPageRoutingModule } from './sinhala-routing.module';

import { SinhalaPage } from './sinhala.page';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SinhalaPageRoutingModule,
        MatButtonModule,
        FlexLayoutModule,
    ],
  declarations: [SinhalaPage]
})
export class SinhalaPageModule {}
