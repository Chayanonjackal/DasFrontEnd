import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatepredictionComponent } from './privateprediction.component';

describe('PrivatepredictionComponent', () => {
  let component: PrivatepredictionComponent;
  let fixture: ComponentFixture<PrivatepredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatepredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatepredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
