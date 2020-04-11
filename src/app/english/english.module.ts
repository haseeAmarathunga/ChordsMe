import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishPageRoutingModule } from './english-routing.module';

import { EnglishPage } from './english.page';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishPageRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  declarations: [EnglishPage]
})
export class EnglishPageModule {}
