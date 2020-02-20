import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { March1Component } from './march1.component';

describe('March1Component', () => {
  let component: March1Component;
  let fixture: ComponentFixture<March1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ March1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(March1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
