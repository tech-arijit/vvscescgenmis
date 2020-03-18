import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  public changepass: any;
  showMsg = false;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.changepass = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      oldpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }
  get password() { return this.changepass.get('password'); }
  get repassword() { return this.changepass.get('repassword'); }

  changePass() {
    this.loader = true;
    const changePassData: any = { data: JSON.stringify(this.changepass.value) };
    this.apiService._appChangePass(changePassData).subscribe(
      (res: any) => {
        if (res) {
          this.loader = false;
          // alert(res.message);
          this.snackBar.open(res.message, '', {
            duration: 5000,
          });
          if (res.type === 'Success') {
            this.router.navigate(['user/app/changepassword']);
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
