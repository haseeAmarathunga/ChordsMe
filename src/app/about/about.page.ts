import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {AddMobService} from '../services/add-mob.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    constructor(private navCtrl: NavController,
                private adMobService: AddMobService) {
    }

    ngOnInit() {
    }

    goToMain() {
        this.navCtrl.navigateRoot('main/side-nav/home');
    }

    onInstruction() {
        this.navCtrl.navigateRoot('instruction');
    }

    onAdMob() {
        this.adMobService.rewardVideoAdd();
    }
}
