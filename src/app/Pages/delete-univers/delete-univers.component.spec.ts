import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUniversComponent } from './delete-univers.component';

describe('DeleteUniversComponent', () => {
  let component: DeleteUniversComponent;
  let fixture: ComponentFixture<DeleteUniversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUniversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
