import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearmonthpayslipComponent } from './yearmonthpayslip.component';

describe('YearmonthpayslipComponent', () => {
  let component: YearmonthpayslipComponent;
  let fixture: ComponentFixture<YearmonthpayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearmonthpayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearmonthpayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
