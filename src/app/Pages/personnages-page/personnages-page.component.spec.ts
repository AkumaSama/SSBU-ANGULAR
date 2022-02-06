import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesPageComponent } from './personnages-page.component';

describe('PersonnagesPageComponent', () => {
  let component: PersonnagesPageComponent;
  let fixture: ComponentFixture<PersonnagesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnagesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
