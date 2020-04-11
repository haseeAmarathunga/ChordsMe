import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './home.page';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),
        FlexLayoutModule,
    ],
  declarations: [Tab1Page],
  providers: [SpeechRecognition]
})
export class Tab1PageModule {}
