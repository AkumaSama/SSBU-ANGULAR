import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageCardComponent } from './personnage-card.component';

describe('PersonnageCardComponent', () => {
  let component: PersonnageCardComponent;
  let fixture: ComponentFixture<PersonnageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
