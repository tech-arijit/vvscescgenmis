import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: any;
  showMsg = false;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get username() { return this.login.get('username'); }
  get password() { return this.login.get('password'); }

  appLogin() {
    this.loader = true;
    const loginData: any = { data: JSON.stringify(this.login.value) };
    this.apiService._appLogin(loginData).subscribe(
      (res: any) => {
        if (res.token) {
          this.loader = false;
          this.snackBar.open('Login Successfuly', '', {
            duration: 3000,
          });
          localStorage.setItem('appKey', JSON.stringify(res.token));
          localStorage.setItem('userData', JSON.stringify(res.userData));
          this.router.navigate(['user/app/dashboard']);
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

  // appLogin() {
  //   this.router.navigate(['user/app/dashboard']);
  // }

}
