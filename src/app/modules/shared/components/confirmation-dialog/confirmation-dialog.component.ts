import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogData } from './confirmation-dialog.model';
import { ConfirmationDialogService } from './confirmation-dialog.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  data!: ConfirmationDialogData; 

  constructor(private dialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.data = this.dialogService.data;
  }



}
