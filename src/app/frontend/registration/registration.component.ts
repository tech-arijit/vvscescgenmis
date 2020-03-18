import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: any;
  companyList: any[];
  deptList: any[];
  groupList: any[];
  loader = false;
  selCompany = null;
  selDepartment = null;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCompanyList();
    this.registration = this.fb.group({
      companyId: new FormControl('', [
        Validators.required
      ]),
      deptId: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])
    });
  }

  getCompanyList() {
    this.apiService._getCompanyList().subscribe(
      (res: any) => {
        if (res) {
          this.companyList = res;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  getDepartmentlist(obj) {
    if (obj) {
      const companyData: any = { data: JSON.stringify(obj) };
      this.apiService._getdeptGrpList(companyData).subscribe(
        (res: any) => {
          if (res) {
            this.loader = false;
            this.deptList = res.DepartmentList;
            this.groupList = res.EmpGroupList;
          } else {
            this.loader = false;
          }
        },
        err => {
          this.loader = false;
        });
    }
  }

  register() {
    this.loader = true;
    const registrationData: any = { data: JSON.stringify(this.registration.value) };
    this.apiService._appRegistration(registrationData).subscribe(
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
    console.log(registrationData);
  }

}
