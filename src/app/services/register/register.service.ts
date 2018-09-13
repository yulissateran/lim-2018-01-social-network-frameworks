import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  writeUserData(user, name) {
    // console.log(user);
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

  // writePostData(postId, description, user) {
  //   return new Promise((resolve) => {
  //     firebase
  //       .database()
  //       .ref('post/' + postId).set({
  //         uid,
  //         description,
  //         privacity,
  //         createdAt,
  //         countLike,
  //         likes
  //       });
  //       resolve(true);
  //   });
  // }

  getUser() {

  }

  getPost() {

  }
}
