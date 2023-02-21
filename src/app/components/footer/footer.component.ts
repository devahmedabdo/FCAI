import { Component, OnInit } from '@angular/core';
import {
  faYoutube,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}
  year: number = new Date().getFullYear();
  faYoutube = faYoutube;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
}
