import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AnimationController, NavController} from '@ionic/angular';
import {MatIconRegistry} from '@angular/material';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, AfterViewInit {

    @ViewChild('img', {read: ElementRef, static: true}) img: ElementRef;
    @ViewChild('btn', {read: ElementRef, static: true}) btn: ElementRef;
    @ViewChild('txt', {read: ElementRef, static: true}) txt: ElementRef;
    @ViewChild('span', {read: ElementRef, static: true}) span: ElementRef;
    @ViewChild('transparent', {read: ElementRef, static: true}) transparent: ElementRef;

    constructor(private sanitizer: DomSanitizer,
                private animationCtrl: AnimationController,
                private navCtrl: NavController,
                private iconRegistry: MatIconRegistry) {
        iconRegistry.addSvgIcon(
            'forward',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_forward_ios-24px.svg'));
        iconRegistry.addSvgIcon(
            'navigate',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/navigate_next-24px.svg'));
    }

    ngAfterViewInit(): void {
        const animation = this.animationCtrl
            .create()
            .addElement(this.img.nativeElement)
            .duration(1500)
            .iterations(1)
            .fromTo('transform', 'translateX(100px)', 'translateX(8px)')
            .fromTo('opacity', 0.1, 1);
        animation.play();
        const animationBtn = this.animationCtrl
            .create()
            .addElement(this.btn.nativeElement)
            .duration(1500)
            .iterations(1)
            .fromTo('transform', 'translateX(-100px)', 'translateX(8px)')
            .fromTo('opacity', 0.1, 1);
        animationBtn.play();

        const animationTxt = this.animationCtrl
            .create()
            .addElement(this.txt.nativeElement)
            .duration(2000)
            .fromTo('transform', 'translateY(-300px)', 'translateY(8px)')
            .fromTo('opacity', 0.1, 1);
        animationTxt.play();

        const animationTransparent = this.animationCtrl
            .create()
            .addElement(this.transparent.nativeElement)
            .duration(2000)
            .iterations(Infinity)
            .fromTo('transform', 'translateY(-300px)', 'translateY(8px)')
            .fromTo('opacity', 0.1, 1);
        animationTransparent.play();
    }

    ngOnInit(): void {
    }

    btnClick() {
        const animationSpan = this.animationCtrl
            .create()
            .addElement(this.span.nativeElement)
            .duration(500)
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(-300px)')
            .fromTo('opacity', 1, 0.1);
        animationSpan.play();
        // this.navCtrl.navigateRoot('main/tabs/home');
        if (localStorage.getItem('isFirst') === 'n') {
          this.navCtrl.navigateRoot('main/tabs/home');
        } else {
          this.navCtrl.navigateRoot('instruction');
        }
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
