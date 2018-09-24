import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observer } from 'firebase/app';
import { Observable } from 'rxjs/observable';
import 'rxjs/operator/map';
import 'rxjs/operator/switchMap';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$.switchMap(
      user => this.userService.get(user.uid)
    ).map(appUser => appUser.isAdmin);
  }
}
