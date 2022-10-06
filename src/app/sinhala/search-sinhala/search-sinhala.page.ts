import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ChordsService} from '../../services/chords.service';
import {Chord} from '../../model/chord';
import {FormControl, FormGroup} from '@angular/forms';
import {ChordComponent} from '../../shared/chord/chord.component';

@Component({
  selector: 'app-search-sinhala',
  templateUrl: './search-sinhala.page.html',
  styleUrls: ['./search-sinhala.page.scss'],
})
export class SearchSinhalaPage implements OnInit {

  constructor(private navCtrl: NavController,
              private modalController: ModalController,
              private chordService: ChordsService) {
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
      const keywords = this.searchKey.toLowerCase().split(' ');
      const filteredChords = [];
      this.chordService.findChordsByName(keywords[0]).subscribe((res: Chord[]) => {
        res.forEach(chord => {
          if (keywords.length > 1 && keywords[1] !== '') {
            if (keywords.length === 2) {
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
              let n = 0;
              chord.keywords.forEach(keys => {
                if (keys === keywords[1]) {
                  n++;
                } else if (keys === keywords[2]) {
                  n++;
                }
              });
              if (n > 2) {
                filteredChords.push(chord);
              }
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

  goToSinhala() {
    this.navCtrl.navigateRoot('main/side-nav/sinhala');
  }

  addFocusSong() {
    this.searchKey = '';
  }

  removeFocusSong() {
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
