import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GetupdremService {

  constructor() { }

  getPost() {
    return new Promise((resolve, rejec) => {
      firebase
        .database()
        .ref()
        .child('posts')
        .on('value', (snap) => {
          resolve(snap.val());
        });
    });
  }
}
