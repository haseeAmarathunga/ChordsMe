import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Chord} from '../../model/chord';
import {NotificationService} from '../../services/notification.service';
import {AddMobService} from '../../services/add-mob.service';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss'],
})
export class ChordComponent implements OnInit {

  constructor(private modalController: ModalController,
              private adMobService: AddMobService,
              private notifyService: NotificationService) { }
  keys = ['Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G'];
  size = 13;
  chords: Chord;
  @Input() data: Chord;
  ngOnInit() {
    if (this.data) {
      this.chords = this.data;
    }
  }
  zoomIn() {
    this.size += 1;
  }
  zoomOut() {
    this.size -= 1;
    this.adMobService.interstitialAdd();
  }

  goBack() {
    this.modalController.dismiss();
  }

  checkKey(key: string) {
    let keyFam = '';
    for (let i = 0; i <= this.chords.key.length; i++) {
      if (!(this.chords.key.charAt(i) === 'm' || this.chords.key.charAt(i) === '7')) {
        keyFam += this.chords.key.charAt(i);
      }
    }
    if (keyFam === key) {
      return true;
    } else {
      return false;
    }
  }
  transposeTo(key) {
    this.adMobService.interstitialAdd();
    this.notifyService.info('Transpose will coming soon!');
  }
}
