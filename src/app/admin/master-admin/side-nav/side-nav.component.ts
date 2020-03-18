import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  roleType = null;
  constructor(private router: Router) { }

  ngOnInit() {
    this.roleType = localStorage.getItem('roleType');
  }
  navMinimize() {
    const navMinimize = document.querySelector('.x-navigation');
    navMinimize.classList.toggle('x-navigation-open');
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
