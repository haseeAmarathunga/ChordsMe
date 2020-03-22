import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ChordComponent} from '../shared/chord/chord.component';
import {Chord} from '../model/chord';

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
      const chord = new Chord();
      chord.chords = '[Intro]\n' +
          '-----------------------------------\n' +
          ' C   Am   F   G\n' +
          'Na ne naane...\n' +
          '\n' +
          '[Verse 1]\n' +
          '-----------------------------------\n' +
          'C              Am\n' +
          'Udula tharu me ahas thalayen\n' +
          'F            G\n' +
          'Wasan wee waage...\n' +
          'Dm          F              C\n' +
          'Maaara sena hadata kendana yaame lan wuye\n' +
          'C            Am           F          G\n' +
          'Megha warsha gaala helune seda yahanawe\n' +
          'Dm           Am           F          G\n' +
          'Dore yana me hangum ganga ohe salunaawe...\n' +
          '\n' +
          '[Chorus]\n' +
          '-----------------------------------\n' +
          'C             Am                F          G\n' +
          'Sandaganawata sandaluthala sipa suwada yaamaye\n' +
          'C            Am              F      G           C\n' +
          'Unuhume gihi thudata meepani genewi raathriye aaye...\n' +
          '\n' +
          '[Verse 2]\n' +
          '-----------------------------------\n' +
          'C            Am           F               G\n' +
          'Kaalekin man aawe naththe pahala gang theere\n' +
          'Dm              F             C             G\n' +
          'Iwura thalasipa ganna awasara deda hitha keewe\n' +
          'C           Am            F           G\n' +
          'Gewiyana me bhawe jiwitha gaane sansaare\n' +
          'Dm               Am             F            G\n' +
          'Magema wee pathiniya numbe diwi gewewaa nibande';
      chord.beat = '4/4';
      chord.key = 'Bbm';
      chord.song = 'Udula Tharu';
      chord.singer = 'Chamal Perera';
      const modal = await this.modalController.create({
          component: ChordComponent,
          componentProps: {data: chord}
      });
      modal.onDidDismiss().then(data => {
          this.ngOnInit();
      });
      return await modal.present();
  }
}
