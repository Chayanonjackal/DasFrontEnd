import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpinfoComponent } from './ppinfo.component';

describe('PpinfoComponent', () => {
  let component: PpinfoComponent;
  let fixture: ComponentFixture<PpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
