import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobpost } from './create-jobpost';

describe('CreateJobpost', () => {
  let component: CreateJobpost;
  let fixture: ComponentFixture<CreateJobpost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJobpost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJobpost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
