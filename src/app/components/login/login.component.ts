import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public _authService: AuthService,
    public _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password);
    this._authService.loginUser(this.email, this.password)
    .then(res => {
      this._router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }

  facebookAccount() {
    this._authService.facebookAccount()
    .then(res => {
      this._router.navigate(['/home']);
    });
  }

  googleAccount() {
    this._authService.googleAccount()
    .then(res => {
      this._router.navigate(['/home']);
    });
  }
}
