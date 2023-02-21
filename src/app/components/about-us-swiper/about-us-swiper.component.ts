import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'about-us-swiper',
  templateUrl: './about-us-swiper.component.html',
  styleUrls: ['./about-us-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutUsSwiperComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    scrollbar: { draggable: true },
  };

  us: any = [
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
    {
      name: 'Ahmed Abdo',
      image: 'nwdn_file_temp_1616565723363.jpg',
      job: 'Front-End Developer',
      linkedin: {
        link: 'https://www.linkedin.com/in/dev-ahmedabdo/',
        icon: faLinkedin,
      },
      github: {
        link: 'https://github.com/devahmedabdo',
        icon: faGithub,
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
