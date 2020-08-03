import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonPageRoutingModule } from './lesson-routing.module';

import { LessonPage } from './lesson.page';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LessonPageRoutingModule,
        FlexModule,
        MatButtonModule
    ],
  declarations: [LessonPage]
})
export class LessonPageModule {}
