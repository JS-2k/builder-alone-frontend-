import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLaunch } from './profile-launch';

describe('ProfileLaunch', () => {
  let component: ProfileLaunch;
  let fixture: ComponentFixture<ProfileLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
