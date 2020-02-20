import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September1Component } from './september1.component';

describe('September1Component', () => {
  let component: September1Component;
  let fixture: ComponentFixture<September1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
