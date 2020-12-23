import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Chord} from '../../model/chord';
import {NotificationService} from '../../services/notification.service';
import {AddMobService} from '../../services/add-mob.service';
import {ZoomComponent} from './zoom/zoom.component';
import {ZoomService} from '../../services/zoom.service';

@Component({
  selector: 'app-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss'],
})
export class ChordComponent implements OnInit, OnDestroy {

  constructor(private modalController: ModalController,
              private adMobService: AddMobService,
              public zoomService: ZoomService,
              private notifyService: NotificationService) {}
  keys = ['Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G'];
  chords: Chord;
  @Input() data: Chord;
  async ngOnInit() {
    if (this.data) {
      this.chords = this.data;
    }
    this.onZoomLoad();
    this.adMobService.bannerAdd().show().then(() => {}).catch(() => {});
  }

  ngOnDestroy(): void {
    this.adMobService.bannerAdd().remove().then(() => {}).catch(() => {});
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
  async onZoomLoad() {
    const modal = await this.modalController.create({
      component: ZoomComponent,
      cssClass: 'zoom-dialog'
    });
    modal.onDidDismiss().then(data => {
    });
    return await modal.present();
  }
}
