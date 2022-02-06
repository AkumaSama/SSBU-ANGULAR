import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversPageComponent } from './univers-page.component';

describe('UniversPageComponent', () => {
  let component: UniversPageComponent;
  let fixture: ComponentFixture<UniversPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
