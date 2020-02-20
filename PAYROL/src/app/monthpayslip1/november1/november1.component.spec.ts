import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { November1Component } from './november1.component';

describe('November1Component', () => {
  let component: November1Component;
  let fixture: ComponentFixture<November1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ November1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(November1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
