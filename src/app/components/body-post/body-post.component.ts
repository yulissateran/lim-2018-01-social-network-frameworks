import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-body-post',
  templateUrl: './body-post.component.html',
  styleUrls: ['./body-post.component.css']
})
export class BodyPostComponent implements OnInit {

  constructor( ) { }

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
  addLike(postId){
    console.log(postId,this.currentUserId)
  const uid = (firebase.auth().currentUser.uid);
  let postRef = firebase.database().ref('posts/' + postId);
  // let like = document.getElementById('like');
  postRef.transaction((post) => {
    if (post) {
      if (post.likes && post.likes[uid]) {
        post.likesCount--;
        post.likes[uid] = null;
      } else {
        post.likesCount++;
        if (!post.likes) {
          post.likes = {};
        }
        post.likes[uid] = true;
      }
    }
    return post;
  });
  // like.classList.add('colornotlike');
  }
}
