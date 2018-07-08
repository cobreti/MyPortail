import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserLoginComponent } from './auth-user-login.component';

describe('AuthUserLoginComponent', () => {
  let component: AuthUserLoginComponent;
  let fixture: ComponentFixture<AuthUserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
