import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ChordComponent} from '../shared/chord/chord.component';

@Component({
  selector: 'app-sinhala',
  templateUrl: './sinhala.page.html',
  styleUrls: ['./sinhala.page.scss'],
})
export class SinhalaPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async loadChords(song) {
      const modal = await this.modalController.create({
          component: ChordComponent,
          componentProps: {data: song}
      });
      modal.onDidDismiss().then(data => {
          this.ngOnInit();
      });
      return await modal.present();
  }
}
