import {Component, OnDestroy, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AddMobService} from '../services/add-mob.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.page.html',
  styleUrls: ['./side-nav.page.scss'],
})
export class SideNavPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      pathName: 'home',
      url: '/main/side-nav/home',
      icon: 'home'
    },
    {
      title: 'Lessons',
      pathName: 'lesson',
      url: '/main/side-nav/lesson',
      icon: 'copy'
    },
    {
      title: 'Songs',
      pathName: 'sinhala',
      url: '/main/side-nav/sinhala',
      icon: 'musical-notes'
    },
    {
      title: 'About',
      pathName: 'about',
      url: '/main/side-nav/about',
      icon: 'information-circle'
    }
  ];
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private adMobService: AddMobService,
      private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('main/side-nav/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.pathName.toLowerCase() === path.toLowerCase());
    }
  }

}
