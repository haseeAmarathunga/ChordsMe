import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) {
  }

  async success(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'primary',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }

  async warn(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 4000,
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }
  async info(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'dark',
      duration: 4000,
      showCloseButton: true,
      closeButtonText: 'Close'
    });
    toast.present();
  }
}
