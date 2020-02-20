import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doumentyear2020Component } from './doumentyear2020.component';

describe('Doumentyear2020Component', () => {
  let component: Doumentyear2020Component;
  let fixture: ComponentFixture<Doumentyear2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doumentyear2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doumentyear2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
