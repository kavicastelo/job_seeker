import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavailableDatesComponent } from './unavailable-dates.component';

describe('UnavailableDatesComponent', () => {
  let component: UnavailableDatesComponent;
  let fixture: ComponentFixture<UnavailableDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavailableDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnavailableDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
