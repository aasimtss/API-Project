import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(
    private http: HttpClient,
    private toastr: NotificationService,
    private router: Router
  ) {
    this.loggedIn.next(this.logIn());
  }

  ngOnInit(): void {}
  logIn() {
    return localStorage.getItem('token') ? true : false;
    // return this.http.get('http://localhost:3000/dataList');
  }
  //   getLocalStorageUser() {
  //     this.userData = localStorage.getItem('token');
  //     if (this.userData) {
  //       this.isLoggedIn = true;
  //       return true;
  //     } else {
  //       this.isLoggedIn = false;
  //       return false;
  //     }
  //   }
  logOut() {
    localStorage.removeItem('token');
    if (this.router.navigate) {
      this.toastr.showSuccess(' Successfully', 'Loged out');
      this.router.navigate(['/auth']);
      this.loggedIn.next(false);
    } else {
      this.toastr.showError('Unsuccessfully', 'Error');
    }
  }
}
