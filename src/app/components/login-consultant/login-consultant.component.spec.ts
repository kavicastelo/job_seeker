import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConsultantComponent } from './login-consultant.component';

describe('LoginConsultantComponent', () => {
  let component: LoginConsultantComponent;
  let fixture: ComponentFixture<LoginConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
