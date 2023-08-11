import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConsultantProfessionComponent } from './request-consultant-profession.component';

describe('RequestConsultantProfessionComponent', () => {
  let component: RequestConsultantProfessionComponent;
  let fixture: ComponentFixture<RequestConsultantProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestConsultantProfessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestConsultantProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
