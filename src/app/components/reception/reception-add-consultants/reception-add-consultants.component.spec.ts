import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionAddConsultantsComponent } from './reception-add-consultants.component';

describe('ReceptionAddConsultantsComponent', () => {
  let component: ReceptionAddConsultantsComponent;
  let fixture: ComponentFixture<ReceptionAddConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionAddConsultantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionAddConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
