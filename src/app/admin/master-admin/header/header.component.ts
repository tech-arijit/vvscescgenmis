import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../_services/admin-api.service';
import { DefaultHelper } from '../../../_helpers/default';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  adminData: any;

  constructor(
    private apiService: AdminApiService,
    private helper: DefaultHelper,
    private router: Router
  ) { }


  ngOnInit() {
    this.adminDtls();
  }

  adminDtls() {
    this.apiService._adminDetails().subscribe(
      (res: any) => {
        if (res) {
          this.adminData = res;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  adminlogout() {
    if (localStorage.getItem('adminKey')) {
      localStorage.removeItem('adminKey');
      this.router.navigate(['/admin/login']);
    } else {
      this.router.navigate(['/admin/login']);
    }
  }
}
