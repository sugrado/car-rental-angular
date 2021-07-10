import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string) {
    var item = localStorage.getItem(key);
    if (item !== null) {
      return item;
    } else {
      return null;
    }
  }

  setItem(key: string, value: string) {
    if (this.getItem(key) === null) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string) {
    if (this.getItem(key) !== null) {
      localStorage.removeItem(key);
    }
  }
}
