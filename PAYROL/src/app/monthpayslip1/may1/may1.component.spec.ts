import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { May1Component } from './may1.component';

describe('May1Component', () => {
  let component: May1Component;
  let fixture: ComponentFixture<May1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ May1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(May1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
