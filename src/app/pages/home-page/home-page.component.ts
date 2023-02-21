import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  faBullhorn,
  faLightbulb,
  faRankingStar,
  faLayerGroup,
  faCode,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  constructor(private fb: FormBuilder) {}

  benifits: any = [
    {
      title: 'Announcements',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faBullhorn,
    },
    {
      title: 'Materials',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faLayerGroup,
    },
    {
      title: 'Programming',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faCode,
    },
    {
      title: 'Hapit Tracking',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faRankingStar,
    },
    {
      title: 'Study Tracking',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faGraduationCap,
    },
    {
      title: 'Inspiration',
      describe:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, voluptatibus libero, laboriosam reprehenderit veniam ex esse quasi, ut dolor iste architecto velit sit recusandae.',
      icon: faLightbulb,
    },
  ];
  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });
  formControl = this.contactForm.controls;
  sendMessage(value: any) {
    console.log(value);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      document
        .querySelectorAll('#landing *.lReveal , #landing *.rReveal')
        .forEach((e) => {
          e.classList.add('reveal');
        });
    }, 400);
  }
}
