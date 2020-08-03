import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {chordTypes} from '../model/constants';
import {LessonChordComponent} from '../shared/lesson-chord/lesson-chord.component';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.page.html',
    styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {

    constructor(private navCtrl: NavController,
                private modalController: ModalController) {
    }

    chordTypes = chordTypes;

    ngOnInit() {
    }

    goToMain() {
        this.navCtrl.navigateRoot('main/tabs/home');
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
}
