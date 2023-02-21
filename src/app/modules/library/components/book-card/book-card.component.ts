import { Component, Input, OnInit } from '@angular/core';
import { BookDetailsDialogService } from '../book-details-dialog/book-details-dialog.service';
import { BookDetailsData } from '../book-details-dialog/book-details.model';
import { BookCardData } from './book-card-data.model';

@Component({
  selector: 'lib-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() bookData!: BookCardData;

  bookDetails: BookDetailsData = {
    id: '1',
    title: 'C++ Mastering',
    image:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
    description:
      'C++ has come a long way and has now been adopted in several contexts. Its key strengths are its software infrastructure and resource-constrained applications. The C++ 17 release will change the way developers write code, and this book will help you master your developing skills with C++. With real-world, practical examples explaining each concept, the book will begin by introducing you to the latest features in C++ 17. It encourages clean code practices in C++ in general, and demonstrates the GUI app-development options in C++. You’ll get tips on avoiding memory leaks using smart-pointers. Next, you’ll see how multi-threaded programming can help you achieve concurrency in your applications. Moving on, you’ll get an in-depth understanding of the C++ Standard Template Library.',
    author: 'John Doe',
    published: '2021',
    views: '1.5M',
  };

  constructor(private bookDetailsDialogService: BookDetailsDialogService) {}

  ngOnInit(): void {}

  openDetailsDialog() {
    this.bookDetailsDialogService.openDialog(this.bookDetails);
  }
}
