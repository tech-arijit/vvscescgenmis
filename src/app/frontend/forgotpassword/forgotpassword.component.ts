import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  public forpass: any;
  showMsg = false;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.forpass = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])
    });
  }

  get username() { return this.forpass.get('username'); }

  appForPass() {
    this.loader = true;
    const forPassData: any = { data: JSON.stringify(this.forpass.value) };
    this.apiService._appForgotPass(forPassData).subscribe(
      (res: any) => {
        if (res) {
          this.loader = false;
          this.snackBar.open(res.message, '', {
            duration: 5000,
          });
          if (res.type === 'Success') {
            this.router.navigate(['/user/login']);
          }
        } else {
          this.loader = false;
        }
      },
      err => {
        this.loader = false;
      });
  }
}
