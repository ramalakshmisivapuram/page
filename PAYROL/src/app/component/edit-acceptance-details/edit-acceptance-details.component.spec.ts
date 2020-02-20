import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcceptanceDetailsComponent } from './edit-acceptance-details.component';

describe('EditAcceptanceDetailsComponent', () => {
  let component: EditAcceptanceDetailsComponent;
  let fixture: ComponentFixture<EditAcceptanceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcceptanceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcceptanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
