import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodctComponent } from './editprodct.component';

describe('EditprodctComponent', () => {
  let component: EditprodctComponent;
  let fixture: ComponentFixture<EditprodctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprodctComponent]
    });
    fixture = TestBed.createComponent(EditprodctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
