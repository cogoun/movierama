import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscribeFormComponent } from './user-subscribe-form.component';

describe('UserSubscribeFormComponent', () => {
  let component: UserSubscribeFormComponent;
  let fixture: ComponentFixture<UserSubscribeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubscribeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
