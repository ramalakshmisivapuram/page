import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicaldeclarationComponent } from './edit-medicaldeclaration.component';

describe('EditMedicaldeclarationComponent', () => {
  let component: EditMedicaldeclarationComponent;
  let fixture: ComponentFixture<EditMedicaldeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicaldeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicaldeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
