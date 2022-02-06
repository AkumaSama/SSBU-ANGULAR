import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversShowComponent } from './univers-show.component';

describe('UniversShowComponent', () => {
  let component: UniversShowComponent;
  let fixture: ComponentFixture<UniversShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
