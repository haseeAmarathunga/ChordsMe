import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideNavPageRoutingModule } from './side-nav-routing.module';

import { SideNavPage } from './side-nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideNavPageRoutingModule
  ],
  declarations: [SideNavPage]
})
export class SideNavPageModule {}
