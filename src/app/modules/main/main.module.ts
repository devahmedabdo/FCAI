import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { MainSideNavComponent } from './components/main-side-nav/main-side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AnnouncementSwiperComponent } from './components/announcement-swiper/announcement-swiper.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MainSideNavComponent,
    AnnouncementSwiperComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
