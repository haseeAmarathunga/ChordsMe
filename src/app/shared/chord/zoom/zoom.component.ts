import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-zoom',
    templateUrl: './zoom.component.html',
    styleUrls: ['./zoom.component.scss'],
})
export class ZoomComponent implements OnInit {
    images = '';
    @Input() data: string;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
      if (this.data) {
        this.images = this.data;
      }
    }

    onClose() {
      this.modalController.dismiss();
    }

}
