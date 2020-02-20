import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doumentyear2021Component } from './doumentyear2021.component';

describe('Doumentyear2021Component', () => {
  let component: Doumentyear2021Component;
  let fixture: ComponentFixture<Doumentyear2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doumentyear2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doumentyear2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
