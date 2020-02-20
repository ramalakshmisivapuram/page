import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthAttendenceComponent } from './month-attendence.component';

describe('MonthAttendenceComponent', () => {
  let component: MonthAttendenceComponent;
  let fixture: ComponentFixture<MonthAttendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthAttendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
