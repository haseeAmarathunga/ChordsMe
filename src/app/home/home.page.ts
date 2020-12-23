import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AnimationController} from '@ionic/angular';
import {AddMobService} from '../services/add-mob.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class Tab1Page implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('img', {read: ElementRef, static: true}) img: ElementRef;
    @ViewChild('logo', {read: ElementRef, static: true}) logo: ElementRef;

    constructor(private animationCtrl: AnimationController,
                private adMobService: AddMobService) {
    }

    slideOpts = {
        initialSlide: 1,
        speed: 400,
        autoplay: true
    };

    ngOnInit() {
        this.adMobService.bannerAdd().show().then(() => {}).catch(() => {});
    }

    ngOnDestroy(): void {
        this.adMobService.bannerAdd().remove().then(() => {}).catch(() => {});
    }

    ngAfterViewInit(): void {
        const animation = this.animationCtrl
            .create()
            .addElement(this.logo.nativeElement)
            .duration(5000)
            .iterations(1)
            .keyframes([
                { offset: 0, transform: 'scale(1) rotate(0)' },
                { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
                { offset: 1, transform: 'scale(1) rotate(0)' }
            ]);
        animation.play();
        const animationLogo = this.animationCtrl
            .create()
            .addElement(this.img.nativeElement)
            .duration(2000)
            .iterations(1)
            .fromTo('transform', 'translateX(100px)', 'translateX(8px)')
            .fromTo('opacity', 0.1, 1);
        animationLogo.play();
    }

    onAdMob() {
        this.adMobService.interstitialAdd();
    }
}
