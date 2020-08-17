import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  private zoom = 13;
  constructor() { }

  get size() {
    return this.zoom;
  }
  set size(num: number) {
    this.zoom = num;
  }
}
