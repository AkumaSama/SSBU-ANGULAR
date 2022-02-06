import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniversComponent } from './edit-univers.component';

describe('EditUniversComponent', () => {
  let component: EditUniversComponent;
  let fixture: ComponentFixture<EditUniversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUniversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
