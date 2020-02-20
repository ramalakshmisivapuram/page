import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { June1Component } from './june1.component';

describe('June1Component', () => {
  let component: June1Component;
  let fixture: ComponentFixture<June1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ June1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(June1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
