import {Component, Input, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {AddMobService} from '../../../services/add-mob.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: true
  };
  ver1 = '';
  ver2 = '';
  ver3 = '';
  @Input() v1: string;
  @Input() v2: string;
  @Input() v3: string;
  @Input() name: string;
  private hideSwipe = false;
  constructor(private modalController: ModalController,
              private adMobService: AddMobService,
              private loadingController: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      spinner: null,
      animated: true,
      message: '<ion-img src="assets/images/loader.gif"></ion-img>',
      translucent: true,
      duration: 500,
      cssClass: 'transparent'
    });
    return await loading.present().then(() => {
      if (this.v1 && this.v2 && this.v3) {
        this.ver1 = this.v1;
        this.ver2 = this.v2;
        this.ver3 = this.v3;
      }
    });
  }

  goBack() {
    this.modalController.dismiss();
  }

  swipeHide() {
    this.hideSwipe = !this.hideSwipe;
  }

  onAd() {
    this.adMobService.interstitialAdd();
  }
}
