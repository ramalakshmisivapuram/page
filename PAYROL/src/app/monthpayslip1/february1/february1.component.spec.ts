import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { February1Component } from './february1.component';

describe('February1Component', () => {
  let component: February1Component;
  let fixture: ComponentFixture<February1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ February1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(February1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
