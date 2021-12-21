import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpredictionComponent } from './studentprediction.component';

describe('StudentpredictionComponent', () => {
  let component: StudentpredictionComponent;
  let fixture: ComponentFixture<StudentpredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentpredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
