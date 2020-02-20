import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceMonthYearComponent } from './attendence-month-year.component';

describe('AttendenceMonthYearComponent', () => {
  let component: AttendenceMonthYearComponent;
  let fixture: ComponentFixture<AttendenceMonthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceMonthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
