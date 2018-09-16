import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-body-post',
  templateUrl: './body-post.component.html',
  styleUrls: ['./body-post.component.css']
})
export class BodyPostComponent implements OnInit {

  constructor( 
  ) { }

 Arrayposts: any;
 posts: any;
 public currentUserId :any 
  ngOnInit() {
    
    firebase.database().ref().child('posts').on('value', (snap) => {
      this.currentUserId = firebase.auth().currentUser.uid;
      this.posts = snap.val();
      this.Arrayposts = Object.keys(snap.val());
      console.log(this.posts)
    });
  }

}
