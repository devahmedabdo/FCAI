import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [CommonModule, AngularMaterialModule, SwiperModule],
  exports: [AngularMaterialModule, SwiperModule],
})
export class SharedModule {}
