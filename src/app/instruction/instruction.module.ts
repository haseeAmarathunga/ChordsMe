import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructionPageRoutingModule } from './instruction-routing.module';

import { InstructionPage } from './instruction.page';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InstructionPageRoutingModule,
        FlexModule
    ],
  declarations: [InstructionPage]
})
export class InstructionPageModule {}
