import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;
  userLogin: string = 'admin';
  userPassword: string = '123';


  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setMessage();
  }

  login(): void {
    this.setMessage('Trying to long in...');
    this.authService.login(this.userLogin, this.userPassword).subscribe({
      next: res => {
        console.log(`Login observable result ${res}`);
        this.setMessage();
        if (!this.authService.isLoggedIn) return;
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]).then();
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }

  private setMessage(msg: string = ''): void {
    if (msg) {
      this.message = msg;
      return;
    }
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }
}
