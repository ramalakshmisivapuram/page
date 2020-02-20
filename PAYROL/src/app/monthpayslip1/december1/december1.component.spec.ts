import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { December1Component } from './december1.component';

describe('December1Component', () => {
  let component: December1Component;
  let fixture: ComponentFixture<December1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ December1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(December1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
