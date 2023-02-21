import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementSwiperComponent } from './announcement-swiper.component';

describe('AnnouncementSwiperComponent', () => {
  let component: AnnouncementSwiperComponent;
  let fixture: ComponentFixture<AnnouncementSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
