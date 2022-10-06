import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Chord} from '../../model/chord';
import {ChordsService} from '../../services/chords.service';
import {ChordComponent} from '../../shared/chord/chord.component';

@Component({
    selector: 'app-latest',
    templateUrl: './latest.page.html',
    styleUrls: ['./latest.page.scss'],
})
export class LatestPage implements OnInit {
    songs: Chord[];

    constructor(private navCtrl: NavController,
                private chordService: ChordsService,
                private modalController: ModalController,
                private loadingController: LoadingController,
    ) {
    }

    async ngOnInit() {
        const loading = await this.loadingController.create({
            spinner: null,
            animated: true,
            message: '<ion-img src="assets/images/loader.gif"></ion-img>',
            translucent: true,
            cssClass: 'transparent'
        });
        return await loading.present().then(() => {
            this.chordService.findLatestUploadChords().subscribe((res: Chord[]) => {
                this.songs = res;
                this.songs.reverse();
                loading.dismiss();
            });
        });
    }

    goToSinhala() {
        this.navCtrl.navigateRoot('main/side-nav/sinhala');
    }

    async loadChords(song: Chord) {
        const modal = await this.modalController.create({
            component: ChordComponent,
            componentProps: {data: song}
        });
        modal.onDidDismiss().then(() => {
        });
        return await modal.present();
    }
}
