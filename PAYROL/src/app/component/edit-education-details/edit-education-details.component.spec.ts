import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationDetailsComponent } from './edit-education-details.component';

describe('EditEducationDetailsComponent', () => {
  let component: EditEducationDetailsComponent;
  let fixture: ComponentFixture<EditEducationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEducationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
