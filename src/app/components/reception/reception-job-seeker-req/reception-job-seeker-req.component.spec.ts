import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionJobSeekerReqComponent } from './reception-job-seeker-req.component';

describe('ReceptionJobSeekerReqComponent', () => {
  let component: ReceptionJobSeekerReqComponent;
  let fixture: ComponentFixture<ReceptionJobSeekerReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionJobSeekerReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionJobSeekerReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
