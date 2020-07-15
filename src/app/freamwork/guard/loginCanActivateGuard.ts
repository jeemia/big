import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';

// import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginCanActivateGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const userInfo = window.sessionStorage.getItem('userInfo');
    const a = 3;
    if (a < 4) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
