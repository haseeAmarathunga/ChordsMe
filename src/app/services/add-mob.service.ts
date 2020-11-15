import {Injectable} from '@angular/core';
import {
    AdMobFree,
    AdMobFreeBanner,
    AdMobFreeBannerConfig,
    AdMobFreeInterstitialConfig,
    AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';

@Injectable({
    providedIn: 'root'
})
export class AddMobService {

    constructor(private adMob: AdMobFree) {
    }

    bannerAdd(): AdMobFreeBanner {
        const bannerConfig: AdMobFreeBannerConfig = {
            id: 'ca-app-pub-5644153964390331/1034300362',
            isTesting: false,
            autoShow: true
        };
        this.adMob.banner.config(bannerConfig);
        this.adMob.banner.prepare()
            .then(() => {
            }).catch(() => {
        });
        return this.adMob.banner;
    }

    interstitialAdd() {
        const interstitialConfig: AdMobFreeInterstitialConfig = {
            id: 'ca-app-pub-5644153964390331/9670048916',
            isTesting: false,
            autoShow: true
        };
        this.adMob.interstitial.config(interstitialConfig);
        this.adMob.interstitial.prepare()
            .then(() => {
                this.adMob.interstitial.show()
                    .then(() => {
                    }).catch(() => {
                });
            }).catch(() => {
        });
    }

    rewardVideoAdd() {
        const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
            id: 'ca-app-pub-5644153964390331/6649133907',
            isTesting: false,
            autoShow: true
        };
        this.adMob.rewardVideo.config(rewardVideoConfig);
        this.adMob.rewardVideo.prepare()
            .then(() => {
                this.adMob.rewardVideo.show()
                    .then(() => {
                    }).catch(() => {
                });
            }).catch(() => {
        });
    }
}
