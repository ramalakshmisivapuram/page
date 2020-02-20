import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { July1Component } from './july1.component';

describe('July1Component', () => {
  let component: July1Component;
  let fixture: ComponentFixture<July1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ July1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(July1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
