import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  isLoged!: boolean;
  constructor(
    private router: Router,
    // private toastr: NotificationService,
    private Auth: AuthService
  ) {}

  ngOnInit(): void {
    // this.isLoggedIn$ = this.Auth.isLoggedIn;
    this.Auth.isLoggedIn.subscribe((log) => {
      console.log('isLo', log);
      this.isLoged = log;
    });
  }
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }

  // logOut() {
  //   localStorage.removeItem('token');
  //   if (this.router.navigate) {
  //     this.toastr.showSuccess(' Successfully', 'Loged out');
  //     this.router.navigate(['/auth']);
  //   } else {
  //     this.toastr.showError('Unsuccessfully', 'Error');
  //   }
  // }
  onlogOut() {
    this.Auth.logOut();
  }
}
