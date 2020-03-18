import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../_services/admin-api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public adminlogin: any;
  showMsg = false;
  loader = false;

  constructor(
    private apiService: AdminApiService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adminlogin = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get username() { return this.adminlogin.get('username'); }
  get password() { return this.adminlogin.get('password'); }

  adminLogin() {
    this.loader = true;
    const loginData: any = { data: JSON.stringify(this.adminlogin.value) };
    this.apiService._adminLogin(loginData).subscribe(
      (res: any) => {
        if (res.token) {
          this.loader = false;
          this.snackBar.open('Login Successfuly', '', {
            duration: 3000,
          });
          localStorage.setItem('adminKey', JSON.stringify(res.token));
          localStorage.setItem('roleType', res.userData.userroleid);
          this.router.navigate(['/admin/app/dashboard']);
        } else {
          this.loader = false;
          this.snackBar.open('Login credintial not matched', '', {
            duration: 5000,
          });
        }
      },
      err => {
        this.loader = false;
        this.snackBar.open('Login credintial not matched', '', {
          duration: 5000,
        });
      });
  }

}
