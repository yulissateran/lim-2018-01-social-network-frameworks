import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public _authService: AuthService,
    public _router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this._authService.signupUser(this.email, this.password)
    .then(res => {
      this._router.navigate(['/home']);
    });
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
