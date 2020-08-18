import {Component, Input, OnInit} from '@angular/core';
import {chordArr, chordTypes, dirTypes} from '../../model/constants';
import {ModalController} from '@ionic/angular';
import {ZoomComponent} from '../chord/zoom/zoom.component';
import {PreviewComponent} from './preview/preview.component';

@Component({
    selector: 'app-lesson-chord',
    templateUrl: './lesson-chord.component.html',
    styleUrls: ['./lesson-chord.component.scss'],
})
export class LessonChordComponent implements OnInit {

    @Input() data: string;
    dirTypes = dirTypes;
    chordsType = chordTypes;
    chordArr = chordArr;
    selectedDir;
    title;
    selectedChord = null;
    showFlag = false;
    selectedImageIndex = -1;
    imageArr = [];

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        if (this.data) {
            if (this.data === this.chordsType.major.code) {
                this.title = this.chordsType.major.name;
                this.selectedDir = this.dirTypes.major;
            } else if (this.data === this.chordsType.minor.code) {
                this.title = this.chordsType.minor.name;
                this.selectedDir = this.dirTypes.minor;
            } else if (this.data === this.chordsType.seventh.code) {
                this.title = this.chordsType.seventh.name;
                this.selectedDir = this.dirTypes.seventh;
            } else if (this.data === this.chordsType.sus.code) {
                this.title = this.chordsType.sus.name;
                this.selectedDir = this.dirTypes.sus;
            }
        }
    }


    goBack() {
        this.modalController.dismiss();
    }

    resetSelectedChord() {
        this.selectedChord = null;
    }

    async viewImage(image, name) {
        this.imageArr = [];
        const ver1 = this.selectedDir + 'violations/V1/' + image + '.JPG';
        const ver2 = this.selectedDir + 'violations/V2/' + image + '.JPG';
        const ver3 = this.selectedDir + 'violations/V3/' + image + '.JPG';
        const chordName = name + ' ' + this.title;
        const modal = await this.modalController.create({
            component: PreviewComponent,
            cssClass: 'preview-dialog',
            componentProps: {v1: ver1, v2: ver2, v3: ver3, name: chordName}
        });
        modal.onDidDismiss().then(data => {
        });
        return await modal.present();
    }
    closeEventHandler() {
        this.showFlag = false;
        this.selectedImageIndex = -1;
    }
}
