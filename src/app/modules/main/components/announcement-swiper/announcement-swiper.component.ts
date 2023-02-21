import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';

@Component({
  selector: 'announcement-swiper',
  templateUrl: './announcement-swiper.component.html',
  styleUrls: ['./announcement-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnnouncementSwiperComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.pagination',
      dynamicBullets: false,
      clickable: true,
    },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  };

  announcements = [
    {
      title: 'Announcement 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Announcement 2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Announcement 3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      image: 'https://picsum.photos/200/300',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    SwiperCore.use([Pagination, Autoplay]);
  }
}
