import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from './book-details-dialog.component';
import { BookDetailsData } from './book-details.model';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsDialogService {
  data!: BookDetailsData;

  constructor(private dialog: MatDialog) {}

  openDialog(data: BookDetailsData) {
    this.data = data;
    this.dialog.open(BookDetailsDialogComponent, {
      data: this.data,
    });
  }
}
