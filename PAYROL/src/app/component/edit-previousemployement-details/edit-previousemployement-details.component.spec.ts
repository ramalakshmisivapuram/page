import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreviousemployementDetailsComponent } from './edit-previousemployement-details.component';

describe('EditPreviousemployementDetailsComponent', () => {
  let component: EditPreviousemployementDetailsComponent;
  let fixture: ComponentFixture<EditPreviousemployementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPreviousemployementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreviousemployementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
