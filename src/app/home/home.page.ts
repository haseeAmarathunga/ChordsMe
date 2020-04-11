import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class Tab1Page implements OnInit {

    constructor() {
    }

    slideOpts = {
        initialSlide: 1,
        speed: 400,
        autoplay: true
    };

    ngOnInit() {
        // this.artistService.loadAllArtistsToLocal();
    }
}
