import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, NavController} from '@ionic/angular';

@Component({
    selector: 'app-instruction',
    templateUrl: './instruction.page.html',
    styleUrls: ['./instruction.page.scss'],
})
export class InstructionPage implements OnInit {
    // @ts-ignore
    @ViewChild(IonSlides) slides;
    skipMsg = 'Skip';

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    slideChanged() {
        // tslint:disable-next-line:no-shadowed-variable
        const num = this.slides.getActiveIndex().then(num => {
            if (num === 8) {
                this.skipMsg = 'Alright, I got it';
            } else {
                this.skipMsg = 'Skip';
            }
        });

    }

    skipPage() {
        localStorage.setItem('isFirst', 'n');
        this.navCtrl.navigateRoot('main/side-nav/home');
    }

    goToMain() {
        localStorage.setItem('isFirst', 'n');
        this.navCtrl.navigateRoot('main/side-nav/home');
    }
}
