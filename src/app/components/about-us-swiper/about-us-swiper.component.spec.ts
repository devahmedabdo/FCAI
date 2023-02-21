import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSwiperComponent } from './about-us-swiper.component';

describe('AboutUsSwiperComponent', () => {
  let component: AboutUsSwiperComponent;
  let fixture: ComponentFixture<AboutUsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
