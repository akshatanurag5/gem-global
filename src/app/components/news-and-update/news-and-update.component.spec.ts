import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndUpdateComponent } from './news-and-update.component';

describe('NewsAndUpdateComponent', () => {
  let component: NewsAndUpdateComponent;
  let fixture: ComponentFixture<NewsAndUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
