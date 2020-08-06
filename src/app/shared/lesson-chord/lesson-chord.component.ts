import {Component, Input, OnInit} from '@angular/core';
import {chordArr, chordTypes, dirTypes} from '../../model/constants';
import {ModalController} from '@ionic/angular';

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

    viewImage(image, name) {
        this.imageArr = [];
        const url = this.selectedDir + image + '.JPG';
        console.log(url);
        const img = {
            image: url,
            thumbImage: url,
            alt: name + ' ' + this.title,
            title: name + ' ' + this.title
        };
        this.imageArr.push(img);
        this.selectedImageIndex = 0;
        this.showFlag = true;
    }
    closeEventHandler() {
        this.showFlag = false;
        this.selectedImageIndex = -1;
    }
}
