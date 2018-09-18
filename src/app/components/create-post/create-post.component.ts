import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public description: string;
  public privacity: string;
  public defaultPrivacity: any;
  public currentImg: FileList;
  public currentImgSrc: any;
  public items = [];

  constructor(
    public _registerSrv: RegisterService
  ) { }

  ngOnInit() {
    this.items = ['Publico', 'Privado'];
    this.privacity = 'Publico';
  }

  createPost() {
    if (this.description !== undefined && this.description.length > 0) {
      this._registerSrv
        .writePostData(this.description, this.privacity, this.currentImgSrc)
        .then(() => {
          this.description = '';
          this.currentImgSrc = null;
        });
    } else {
      console.log('no escribiste nada');
    }
  }

  addImg(event) {
    this.currentImg = event.target.files;
    const reader = new FileReader();
    reader.onloadend = () => this.currentImgSrc = reader.result;
    reader.readAsDataURL(this.currentImg[0]);
  }
}
