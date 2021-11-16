import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtnCardCarouselComponent } from './mtn-card-carousel.component';

describe('MtnCardCarouselComponent', () => {
  let component: MtnCardCarouselComponent;
  let fixture: ComponentFixture<MtnCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtnCardCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtnCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
