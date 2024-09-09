import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationWrapperComponent } from './authentication-wrapper.component';

describe('AuthenticationWrapperComponent', () => {
  let component: AuthenticationWrapperComponent;
  let fixture: ComponentFixture<AuthenticationWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
