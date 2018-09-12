import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public email: string;
  public password: string;
  public name: string;

  constructor(
    public _authService: AuthService,
    public _router: Router,
    public zone: NgZone,
    public _registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  signup() {
    this._authService.signupUser(this.email, this.password)
      .then((res: { user: { } }) => {
        this._registerService
          .writeUserData(res.user, this.name).then(() => this._router.navigate(['/home']));
      });
  }

  facebookAccount() {
    this._authService.facebookAccount()
      .then(res => {
        this.zone.run(() => this._router.navigate(['/home']));
      });
  }

  googleAccount() {
    this._authService.googleAccount()
      .then(res => {
        this.zone.run(() => this._router.navigate(['/home']));
      });
  }
}
