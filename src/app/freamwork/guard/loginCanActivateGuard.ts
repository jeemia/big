import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

// import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginCanActivateGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // 每个30分钟清空一次session
    setInterval(() => {
      window.sessionStorage.removeItem('userName');
    }, 30 * 60 * 1000);
    const userName = window.sessionStorage.getItem('userName');
    console.log('2222')
    if (!userName) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
