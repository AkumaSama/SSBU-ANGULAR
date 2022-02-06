import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversCreationComponent } from './univers-creation.component';

describe('UniversCreationComponent', () => {
  let component: UniversCreationComponent;
  let fixture: ComponentFixture<UniversCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
