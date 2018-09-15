import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public post = {};
  public updates = {};
  public date : any;

  constructor() { }

  writeUserData(user, name) {
    return new Promise((resolve) => {
      firebase
        .database()
        .ref('users/' + user.uid).set({
          username: name,
          email: user.email
        });
      resolve(true);
    });
  }

  writePostData(description, privacity) {
    this.date = firebase.database.ServerValue.TIMESTAMP;
    return new Promise((resolve) => {
      firebase
        .database()
        .ref('posts')
        .push()
        .set({
          description: description,
          privacity: privacity,
          date: this.date
        });
      resolve(true);
    });
  }
}

// getUser() {

// }

// getPost() {

// }

