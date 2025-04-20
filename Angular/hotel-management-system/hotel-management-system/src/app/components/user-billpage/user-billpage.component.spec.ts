import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillpageComponent } from './user-billpage.component';

describe('UserBillpageComponent', () => {
  let component: UserBillpageComponent;
  let fixture: ComponentFixture<UserBillpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBillpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBillpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
