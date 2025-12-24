import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostOverview } from './jobpost-overview';

describe('JobpostOverview', () => {
  let component: JobpostOverview;
  let fixture: ComponentFixture<JobpostOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobpostOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobpostOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
