import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { August1Component } from './august1.component';

describe('August1Component', () => {
  let component: August1Component;
  let fixture: ComponentFixture<August1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ August1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(August1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
