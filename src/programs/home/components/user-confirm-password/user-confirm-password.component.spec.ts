import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmPasswordComponent } from './user-confirm-password.component';

describe('UserConfirmPasswordComponent', () => {
  let component: UserConfirmPasswordComponent;
  let fixture: ComponentFixture<UserConfirmPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
