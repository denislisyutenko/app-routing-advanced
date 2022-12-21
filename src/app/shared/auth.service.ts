import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl!: string;

  constructor() {
  }

  login(login: string, password: string): Promise<boolean> {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          login: 'admin',
          password: '123'
        });
      }, 2000);
    });

    return promise.then((res: any) => {
      return login === res.login && password === res.password ? this.isLoggedIn = true : false;
    });
  }

  logout() {
    this.isLoggedIn = false;
  }

}
