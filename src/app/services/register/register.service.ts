import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public post = {};
  public updates = {};

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
    return new Promise((resolve) => {
      firebase
        .database()
        .ref('posts')
        .set({
          description: description,
          privacity: privacity
        });
      resolve(true);
    });
  }
}

// getUser() {

// }

// getPost() {

// }

