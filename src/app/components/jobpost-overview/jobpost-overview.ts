import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobpost-overview',
  imports: [CommonModule],
  templateUrl: './jobpost-overview.html',
  styleUrl: './jobpost-overview.css',
})
export class JobpostOverview implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  job = {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechStart Inc',
    location: 'Remote',
    salary: '$80k - $120k',
    type: 'Full-time',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    posted: '2 days ago',
    description: 'We are looking for a senior full stack developer to join our growing team. You will work on building scalable web applications and APIs.',
    requirements: [
      '5+ years of experience with React and Node.js',
      'Strong knowledge of PostgreSQL',
      'Experience with TypeScript',
      'Understanding of RESTful APIs'
    ]
  };

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    // In real app, fetch job by ID
  }

  goBack() {
    this.location.back();
  }
}
