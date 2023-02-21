import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';
import { BookCardData } from './components/book-card/book-card-data.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  cards: BookCardData[] = [
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
    {
      img: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/56aa0cf1-df94-4b95-b909-eeb945b589f8.__CR0,0,1500,1500_PT0_SX300_V1___.jpg',
      title: 'HTML & CSS: Design and Build Websites',
      author: 'Jon Duckett',
      published: '2011',
      views: '1.5M',
    },
  ];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl('');
  filteredCategories: Observable<string[]>;
  categories: string[] = [];
  allCategories: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React'];

  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) =>
        category ? this._filter(category) : this.allCategories.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    
    // TODO: search with value not case sensitive
    if (this.allCategories.indexOf(value) >= 0) {
      this.categories.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter((category) =>
      category.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit(): void {}
}
