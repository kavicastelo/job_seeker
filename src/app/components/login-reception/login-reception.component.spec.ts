import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReceptionComponent } from './login-reception.component';

describe('LoginReceptionComponent', () => {
  let component: LoginReceptionComponent;
  let fixture: ComponentFixture<LoginReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
