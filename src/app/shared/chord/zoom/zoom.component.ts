import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ZoomService} from '../../../services/zoom.service';
import {AddMobService} from '../../../services/add-mob.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
})
export class ZoomComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry,
              public zoomService: ZoomService,
              public adMobService: AddMobService,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'plus',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/zoom_in-24px.svg'));
    iconRegistry.addSvgIcon(
        'minus',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/zoom_out-24px.svg'));
  }

  ngOnInit() {
  }

  zoomIn() {
    this.zoomService.size += 1;
  }
  zoomOut() {
    this.zoomService.size -= 1;
  }
  onAdd() {
    this.adMobService.interstitialAdd();
  }

}
