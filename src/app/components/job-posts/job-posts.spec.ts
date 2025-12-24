import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPosts } from './job-posts';

describe('JobPosts', () => {
  let component: JobPosts;
  let fixture: ComponentFixture<JobPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
