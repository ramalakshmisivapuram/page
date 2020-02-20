import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { January1Component } from './january1.component';

describe('January1Component', () => {
  let component: January1Component;
  let fixture: ComponentFixture<January1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ January1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(January1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
