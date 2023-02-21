import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  toggelMenu() {
    let toggeler = document.querySelectorAll('#toggeler,.menu');
    toggeler.forEach((e) => {
      e.classList.toggle('active');
    });
  }
  removeActive(arr: any) {
    arr.forEach((e: any) => {
      e.classList.remove('active');
    });
  }
  ngOnInit(): void {
    let toggeler = document.querySelectorAll('#toggeler,.menu');
    let navLink = document.querySelectorAll('.nav-link');
    let landingC = document.querySelectorAll('.landing-component');

    window.addEventListener('scroll', () => {
      this.removeActive(toggeler);

      landingC.forEach(function (ele) {
        if (ele.getBoundingClientRect().top < 650) {
          let active = document.querySelector(
            `.${ele.getAttribute('data-goal')}`
          );
          onview(active);
        }
      });

      function onview(link: any) {
        navLink.forEach(function (ele) {
          ele?.classList.remove('active');
          link?.classList.add('active');
        });
      }
    });
  }
}
