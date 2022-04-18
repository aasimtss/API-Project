import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: NotificationService
  ) {}

  canActivate(): boolean {
    if (this.authService.logIn()) {
      this.toastr.showSuccess(' Successfully', 'Contact Page');
      return true;
    } else {
      this.router.navigate(['/auth']);
      this.toastr.showError('Login First', 'Error');
      return false;
    }
  }
}
