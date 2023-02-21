import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailsDialogComponent } from './components/book-details-dialog/book-details-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LibraryComponent,
    BookCardComponent,
    BookDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class LibraryModule { }
