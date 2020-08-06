import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AddMobService {

  constructor(private adMob: AdMobFree) { }

  bannerAdd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false,
      autoShow: true
    };
    this.adMob.banner.config(bannerConfig);
    this.adMob.banner.prepare()
        .then(() => {
        }).catch(() => {
    });
  }
  interstitialAdd() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: false,
      autoShow: true
    };
    this.adMob.interstitial.config(interstitialConfig);
    this.adMob.interstitial.prepare()
        .then(() => {
        }).catch(() => {
    });
  }
  rewardVideoAdd() {
    const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
      isTesting: false,
      autoShow: true
    };
    this.adMob.rewardVideo.config(rewardVideoConfig);
    this.adMob.rewardVideo.prepare()
        .then(() => {
        }).catch(() => {
    });
  }
}
