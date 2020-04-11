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

    searchKey;
    filteredSongs: Chord[];

    ngOnInit() {
    }

    async searchSong() {
        await this.delay(500);
        if (this.searchKey === '') {
          this.filteredSongs = [];
        } else {
          const keywords = this.searchKey.split(' ');
          const filteredChords = [];
          this.chordService.findChordsByName(keywords[0]).subscribe((res: Chord[]) => {
            res.forEach(chord => {
              if (keywords.length > 1) {
                let n = 0;
                chord.keywords.forEach(keys => {
                  if (keys === keywords[1]) {
                    n++;
                  }
                });
                if (n >= 1) {
                  filteredChords.push(chord);
                }
              } else {
                filteredChords.push(chord);
              }
            });
            this.filteredSongs = filteredChords;
          });
        }
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    goToMain() {
        this.navCtrl.navigateRoot('tabs/home');
    }

    goToArtist() {
    }
}
