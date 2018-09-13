import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  constructor(
    public _authService: AuthService,
    public _router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logoutUser()
      .then(() => {
        this._router.navigate(['/login']);
      });
  }

}
