import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingLanguagesGridComponent } from './coding-languages-grid.component';

describe('CodingLanguagesGridComponent', () => {
  let component: CodingLanguagesGridComponent;
  let fixture: ComponentFixture<CodingLanguagesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingLanguagesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingLanguagesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
