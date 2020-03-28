import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ChordComponent} from '../shared/chord/chord.component';
import {Chord} from '../model/chord';
import {ChordsService} from '../services/chords.service';

@Component({
  selector: 'app-sinhala',
  templateUrl: './sinhala.page.html',
  styleUrls: ['./sinhala.page.scss'],
})
export class SinhalaPage implements OnInit {

  constructor(private modalController: ModalController,
              private chordService: ChordsService) { }
  chords: Chord[];
  ngOnInit() {
      this.chordService.loadAllChords().subscribe((res: any) => {
          this.chords = res;
      });
  }

  async loadChords(song) {
      const modal = await this.modalController.create({
          component: ChordComponent,
          componentProps: {data: song}
      });
      modal.onDidDismiss().then(() => {
      });
      return await modal.present();
  }
}
