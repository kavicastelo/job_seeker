import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionConsultantListComponent } from './reception-consultant-list.component';

describe('ReceptionConsultantListComponent', () => {
  let component: ReceptionConsultantListComponent;
  let fixture: ComponentFixture<ReceptionConsultantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionConsultantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionConsultantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
