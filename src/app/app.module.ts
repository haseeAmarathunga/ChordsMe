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
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {ProgressDialogComponent} from './shared/progress-dialog/progress-dialog.component';
import {ZoomComponent} from './shared/chord/zoom/zoom.component';
import {LessonChordComponent} from './shared/lesson-chord/lesson-chord.component';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NgImageViewerModule} from '@haseeamarathunga/ng-image-viewer';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ChordComponent, ProgressDialogComponent, ZoomComponent, LessonChordComponent],
  entryComponents: [ChordComponent, ProgressDialogComponent, ZoomComponent, LessonChordComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientModule,
        NgImageViewerModule,
        AppRoutingModule, MatCardModule, FlexModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
