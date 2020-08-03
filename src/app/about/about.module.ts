import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        FlexLayoutModule,
        MatCardModule
    ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
