import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStatusComponent } from './room-status.component';

describe('RoomStatusComponent', () => {
  let component: RoomStatusComponent;
  let fixture: ComponentFixture<RoomStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
