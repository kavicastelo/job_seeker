import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionInterviewReqComponent } from './reception-interview-req.component';

describe('ReceptionInterviewReqComponent', () => {
  let component: ReceptionInterviewReqComponent;
  let fixture: ComponentFixture<ReceptionInterviewReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionInterviewReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionInterviewReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
