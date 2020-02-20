import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yearpayslip2021Component } from './yearpayslip2021.component';

describe('Yearpayslip2021Component', () => {
  let component: Yearpayslip2021Component;
  let fixture: ComponentFixture<Yearpayslip2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yearpayslip2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yearpayslip2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
