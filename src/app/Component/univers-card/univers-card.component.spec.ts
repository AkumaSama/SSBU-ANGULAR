import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversCardComponent } from './univers-card.component';

describe('UniversCardComponent', () => {
  let component: UniversCardComponent;
  let fixture: ComponentFixture<UniversCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
