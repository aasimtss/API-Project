import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NotificationService } from 'src/app/notification.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  // private formSubmitAttempt: boolean;
  public dataForm!: FormGroup;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(
    private api: ApiService,
    private router: Router,
    private toastr: NotificationService,
    private authSer: AuthService
  ) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  // onSubmit(form: NgForm) {
  //   // console.log(form.value);
  //   form.reset();
  // }
  addData() {
    console.log(this.dataForm.value);
    const params = this.dataForm.value;
    // this.formSubmitAttempt = true;
    if (this.isLoginMode) {
      this.api.postData(params).subscribe((res) => {
        this.dataForm = res;
        console.log(res);
        // localStorage.setItem('token', res.token);
        // this.dataForm.reset();
      });
    } else {
      this.api.getData().subscribe((res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.dataForm.value.email &&
            a.password === this.dataForm.value.password
          );
        });
        if (user) {
          // alert('Login success');
          this.toastr.showSuccess(' Successfully', 'Loged In');
          this.dataForm.reset();
          localStorage.setItem('token', JSON.stringify(res));
          this.authSer.loggedIn.next(true);
          this.router.navigate(['home']);
        } else {
          this.toastr.showError('Unsuccessfully', 'Error');
        }
      });
    }

    // if (this.dataForm.valid) {
    //   this.api.postData(this.dataForm.value).subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       console.log('hello');

    //       alert('Data added successfully');
    //       this.dataForm.reset();
    //     },
    //     error: () => {
    //       alert('Error while adding the product');
    //     },
    //   });
    // }
  }
  // login() {
  //   const params = this.dataForm.value;
  //   this.api.getData(params).subscribe((res) => {
  //     const user = res.find((a: any) => {
  //       return (
  //         a.email === this.dataForm.value.email &&
  //         a.password === this.dataForm.value.password
  //       );
  //     });
  //     if (user) {
  //       alert('Login success');
  //     } else {
  //       alert('User not found');
  //     }
  //   });
  // }
}
