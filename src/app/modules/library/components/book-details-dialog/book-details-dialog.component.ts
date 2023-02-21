import { Component, OnInit } from '@angular/core';
import { BookDetailsDialogService } from './book-details-dialog.service';
import { BookDetailsData } from './book-details.model';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  data!: BookDetailsData;

  constructor(private bookDetailsDialogService: BookDetailsDialogService) {}

  ngOnInit(): void {
    this.data = this.bookDetailsDialogService.data;
  }
}
