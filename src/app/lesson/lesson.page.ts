import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {chordTypes} from '../model/constants';
import {LessonChordComponent} from '../shared/lesson-chord/lesson-chord.component';
import {AddMobService} from '../services/add-mob.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.page.html',
    styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit, OnDestroy {

    constructor(private navCtrl: NavController,
                private adMobService: AddMobService,
                private modalController: ModalController) {
    }

    chordTypes = chordTypes;

    ngOnInit() {
        this.adMobService.bannerAdd().show().then(() => {}).catch(() => {});
    }

    ngOnDestroy(): void {
        this.adMobService.bannerAdd().remove().then(() => {}).catch(() => {});
    }

    goToMain() {
        this.navCtrl.navigateRoot('main/side-nav/home');
    }

    async loadLesson(chordType: string) {
        const modal = await this.modalController.create({
            component: LessonChordComponent,
            componentProps: {data: chordType}
        });
        modal.onDidDismiss().then(() => {
        });
        return await modal.present();
    }

    onAdMob() {
        this.adMobService.rewardVideoAdd();
    }
}
