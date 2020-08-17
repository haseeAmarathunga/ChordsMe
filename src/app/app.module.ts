import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChordComponent} from './shared/chord/chord.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import {ProgressDialogComponent} from './shared/progress-dialog/progress-dialog.component';
import {LessonChordComponent} from './shared/lesson-chord/lesson-chord.component';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgImageFullscreenViewModule} from 'ng-image-fullscreen-view';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import {ZoomComponent} from './shared/chord/zoom/zoom.component';

@NgModule({
  declarations: [AppComponent, ChordComponent, ProgressDialogComponent, LessonChordComponent, ZoomComponent],
  entryComponents: [ChordComponent, ProgressDialogComponent, LessonChordComponent, ZoomComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientModule,
        NgImageFullscreenViewModule,
        AppRoutingModule, MatCardModule, FlexModule, FormsModule, MatIconModule],
  providers: [
    StatusBar,
    SplashScreen,
      AdMobFree,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
