import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCustomizerComponent } from './avatar-customizer.component';

describe('AvatarCustomizerComponent', () => {
  let component: AvatarCustomizerComponent;
  let fixture: ComponentFixture<AvatarCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCustomizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
