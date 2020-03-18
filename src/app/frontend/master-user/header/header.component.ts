import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  employeeData: any;
  href: string;
  title: string;
  constructor(
    private router: Router
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {

      if (event.url === '/user/app/changepassword') {
        this.title = 'Change Password';
      } else if (event.url === '/user/app/dashboard') {
        this.title = 'Dashboard';
      } else if (event.url === '/user/app/bbgsmis') {
        this.title = 'Comparison Report';
      } else if (event.url === '/user/app/powergenmis') {
        this.title = 'Power Gen MIS';
      } else if (event.url === '/user/app/genmtd') {
        this.title = 'GENERATION (MTD)';
      } else if (event.url === '/user/app/unitwisemtd') {
        this.title = 'Unit Wise MTD';
      }
    });
  }

  ngOnInit() {
    // this.href = this.router.url;

    // this.title = this.href;
    // alert(this.route);
    // this.employeeDtls();
    this.employeeData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.employeeData.name);
  }

  // employeeDtls() {
  //   this.apiService._getEmployeeDtls().subscribe(
  //     (res: any) => {
  //       if (res) {
  //         this.employeeData = res;
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  logout() {
    if (localStorage.getItem('appKey')) {
      localStorage.removeItem('appKey');
      this.router.navigate(['/user/login']);
    } else {
      this.router.navigate(['/user/login']);
    }
  }

}
