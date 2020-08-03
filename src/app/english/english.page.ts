import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ChordsService} from '../services/chords.service';
import {Chord} from '../model/chord';

@Component({
    selector: 'app-english',
    templateUrl: './english.page.html',
    styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {

    constructor(private navCtrl: NavController, private chordService: ChordsService) {
    }

    ngOnInit() {
    }

    goToMain() {
        this.navCtrl.navigateRoot('main/tabs/home');
    }

    goToArtist() {
    }
}
