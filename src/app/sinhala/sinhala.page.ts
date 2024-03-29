import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {ChordComponent} from '../shared/chord/chord.component';
import {Chord} from '../model/chord';
import {ChordsService} from '../services/chords.service';
import {NameCodePair} from '../model/name-code-pair';
import {ArtistService} from '../services/artist.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {NotificationService} from '../services/notification.service';
import {AddMobService} from '../services/add-mob.service';

@Component({
    selector: 'app-sinhala',
    templateUrl: './sinhala.page.html',
    styleUrls: ['./sinhala.page.scss'],
})
export class SinhalaPage implements OnInit, OnDestroy {

    constructor(private modalController: ModalController,
                public artistService: ArtistService,
                public adMobService: AddMobService,
                public loadingController: LoadingController,
                public navController: NavController,
                public notifyService: NotificationService,
                private chordService: ChordsService) {
    }

    isHome = true;
    isArtistPage = false;
    chords: Chord[];
    artists: NameCodePair[] = [];
    filteredArtists: Observable<NameCodePair[]>;
    filteredChords: Observable<Chord[]>;
    form: FormGroup;
    searchTextArtist = '';
    searchTextChord = '';
    selectedArtist = '';

    ngOnInit() {
        this.form = new FormGroup({
            artist: new FormControl(''),
            chords: new FormControl(''),
        });
        this.adMobService.bannerAdd().show().then(() => {}).catch(() => {});
    }

    ngOnDestroy(): void {
        this.adMobService.bannerAdd().remove().then(() => {}).catch(() => {});
    }

    async loadChords(song: Chord) {
        const modal = await this.modalController.create({
            component: ChordComponent,
            componentProps: {data: song}
        });
        modal.onDidDismiss().then(() => {
        });
        return await modal.present();
    }

    filterArtists(value) {
        let filterValue = '';
        if (value !== undefined && value !== null && value.constructor.name === 'String') {
            filterValue = value.toLowerCase();
            return this.artists.filter(option => (option.name.toLowerCase().includes(filterValue) ||
                option.code.toLowerCase().includes(filterValue)));
        }
        return value;
    }
    filterChords(value) {
        let filterValue = '';
        if (value !== undefined && value !== null && value.constructor.name === 'String') {
            filterValue = value.toLowerCase();
            return this.chords.filter(option => (option.song.toLowerCase().includes(filterValue)));
        }
        return value;
    }

    goToNew() {
    }

    async goToArtist() {
        const loading = await this.loadingController.create({
            spinner: null,
            animated: true,
            message: '<ion-img src="assets/images/loader.gif"></ion-img>',
            translucent: true,
            cssClass: 'transparent'
        });
        return await loading.present().then(() => {
            this.isHome = false;
            this.isArtistPage = true;
            if (this.artists.length === 0) {
                console.log('Downloading');
                this.artistService.loadAllArtists().subscribe((res: NameCodePair[]) => {
                    this.artists = res;
                    this.artists.sort((a, b) => a.name.localeCompare(b.name));
                    this.filteredArtists = this.form.get('artist').valueChanges.pipe(startWith(''),
                        map(value => this.filterArtists(value)));
                    return loading.dismiss();
                });
            } else {
                return loading.dismiss();
            }
        });
    }

    backToHome() {
        this.isHome = true;
        this.isArtistPage = false;
        this.searchTextArtist = '';
    }

    backToArtistPage() {
        this.isArtistPage = true;
        this.chords = [];
        this.selectedArtist = '';
    }

    goToMain() {
        this.navController.navigateRoot('main/side-nav/home');
    }

    addFocusArtist() {
        this.searchTextArtist = '';
        this.form.get('artist').setValue(this.searchTextArtist);
    }

    async searchArtist() {
        await this.delay(500);
        this.form.get('artist').setValue(this.searchTextArtist);
    }

    removeFocusArtist() {
    }

    addFocusChord() {
        this.searchTextChord = '';
        this.form.get('chords').setValue(this.searchTextChord);
    }

    async searchChord() {
        await this.delay(500);
        this.form.get('chords').setValue(this.searchTextChord);
    }

    removeFocusChord() {
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async gotoChordList(artist: NameCodePair) {
        this.selectedArtist = artist.name;
        const loading = await this.loadingController.create({
            spinner: null,
            animated: true,
            message: '<ion-img src="assets/images/loader.gif"></ion-img>',
            translucent: true,
            cssClass: 'transparent'
        });
        return await loading.present().then(() => {
            this.isArtistPage = false;
            this.chordService.findChordsByArtist(artist.code).subscribe((res: Chord[]) => {
                this.chords = res;
                this.chords.sort((a, b) => a.song.localeCompare(b.song));
                this.filteredChords = this.form.get('chords').valueChanges.pipe(startWith(''),
                    map(value => this.filterChords(value)));
                return loading.dismiss();
            });
        });
    }

    goToSearch() {
        this.navController.navigateRoot('main/side-nav/sinhala/search-sinhala');
    }
    goToLatest() {
        this.navController.navigateRoot('main/side-nav/sinhala/latest');
    }

    onAlbum() {
        this.notifyService.info('Album option will coming soon.');
    }

    onAdMob() {
        this.adMobService.interstitialAdd();
    }
}
