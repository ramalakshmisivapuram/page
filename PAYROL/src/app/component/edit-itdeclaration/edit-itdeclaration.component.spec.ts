import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItdeclarationComponent } from './edit-itdeclaration.component';

describe('EditItdeclarationComponent', () => {
  let component: EditItdeclarationComponent;
  let fixture: ComponentFixture<EditItdeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItdeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
