import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { ConfirmationDialogData } from './confirmation-dialog.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  data!: ConfirmationDialogData;

  constructor(private dialog: MatDialog) { }

  openDialog(data: ConfirmationDialogData, confirmFunction: () => void){
    this.data = data;
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: this.data,
      })
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          confirmFunction();
        }
      });
  }
}
