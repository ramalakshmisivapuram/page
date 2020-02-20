import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yearpayslip2020Component } from './yearpayslip2020.component';

describe('Yearpayslip2020Component', () => {
  let component: Yearpayslip2020Component;
  let fixture: ComponentFixture<Yearpayslip2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yearpayslip2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yearpayslip2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
