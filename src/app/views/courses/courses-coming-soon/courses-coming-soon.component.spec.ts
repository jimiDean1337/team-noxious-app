import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComingSoonComponent } from './courses-coming-soon.component';

describe('CoursesComingSoonComponent', () => {
  let component: CoursesComingSoonComponent;
  let fixture: ComponentFixture<CoursesComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComingSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
