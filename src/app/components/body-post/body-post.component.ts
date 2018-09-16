import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { GetupdremService } from '../../services/getupdrem/getupdrem.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-body-post',
  templateUrl: './body-post.component.html',
  styleUrls: ['./body-post.component.css']
})
export class BodyPostComponent implements OnInit {

  constructor(
    public _getUpdRemSrv: GetupdremService
  ) { }
  public firebase = firebase;
  public canEdit: boolean = false;
  public textEdit: string;
  public actualPost: string;
  Arrayposts: any;
  posts: any;

  ngOnInit() {
    firebase
      .database()
      .ref()
      .child('posts')
      .on('value', (snap) => {
        // const currentUserId = firebase.auth().currentUser.uid;
        this.posts = snap.val();
        this.Arrayposts = Object.keys(snap.val());
        // console.log(this.posts)
      });
  }

  removePost(idPost) {
    swal({
      type: 'warning',
      title: 'Eliminar post',
      text: 'Estás seguro?',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(result => {
      if (result['value'] === true) {
        this._getUpdRemSrv.deletePost(idPost)
          .then(() => {
            swal({
              type: 'success',
              text: 'Tu post ha sido eliminado'
            });
          });
      }
      else console.log(result);
    });
  }

  editPost(idPost) {
    this.actualPost = idPost;
    this.canEdit = true;
    this.textEdit = this.posts[idPost]['description'];
  }

  cancelEditPost() {
    this.canEdit = false;
  }

  saveEditPost(idPost) {
    this._getUpdRemSrv.updatePost(idPost, this.textEdit)
      .then(() => {
        this.canEdit = false;
      });
  }

}
