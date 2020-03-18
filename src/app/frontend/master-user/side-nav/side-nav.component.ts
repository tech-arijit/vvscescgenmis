import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navMinimize() {
    const navMinimize = document.querySelector('.x-navigation');
    navMinimize.classList.toggle('x-navigation-open');
  }

  logout() {
    if (localStorage.getItem('appKey')) {
      localStorage.removeItem('appKey');
      this.router.navigate(['/user/login']);
    } else {
      this.router.navigate(['/user/login']);
    }
  }
}
