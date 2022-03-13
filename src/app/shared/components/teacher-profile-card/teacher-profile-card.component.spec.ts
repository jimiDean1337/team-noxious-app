import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileCardComponent } from './teacher-profile-card.component';

describe('TeacherProfileCardComponent', () => {
  let component: TeacherProfileCardComponent;
  let fixture: ComponentFixture<TeacherProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
