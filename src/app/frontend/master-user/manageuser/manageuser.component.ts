import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {

  public manageur: any;
  roleList = [
    { id: 1, name: 'Super Admin' },
    { id: 2, name: 'User' }
  ];
  statusList = [
    { id: 1, name: 'Active' },
    { id: 0, name: 'Inactive' }
  ];
  selectedRole: any;
  selectedStatus: any;
  getUserList: any;
  // showMsg = false;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.manageur = this.fb.group({
      employeecode: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      mobileno: new FormControl('', [
        Validators.required
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ])
    });

    this.appListUser();
  }

  get employeecode() { return this.manageur.get('employeecode'); }
  get username() { return this.manageur.get('username'); }
  get password() { return this.manageur.get('password'); }
  get name() { return this.manageur.get('name'); }
  get email() { return this.manageur.get('email'); }
  get mobileno() { return this.manageur.get('mobileno'); }
  get role() { return this.manageur.get('role'); }
  get status() { return this.manageur.get('status'); }

  appManageUser() {
    this.loader = true;
    const uIdx: any = { data: JSON.stringify(this.manageur.value) };
    this.apiService._appUserSave(uIdx).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.loader = false;
          this.appListUser();
          this.manageur.reset();
        }
      },
      err => {

      });
  }

  appListUser() {
    // const uIdLoad: any = { uId: null };
    // const uIdLoadLoadx: any = { data: JSON.stringify(uIdLoad) };
    this.apiService._appUserList({ data: JSON.stringify({ uId: null }) }).subscribe(
      (res: any) => {
        if (res) {
          this.getUserList = res;
        }
      },
      err => {

      });
  }

  appUpdateUser() {
    this.loader = true;
    // this.manageur.patchValue({ surveyId: SurveyId });
    const uIdx: any = { data: JSON.stringify(this.manageur.value) };
    this.apiService._appUserSave(uIdx).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.loader = false;
          this.appListUser();
          this.manageur.reset();
        }
      },
      err => {

      });
  }

}
