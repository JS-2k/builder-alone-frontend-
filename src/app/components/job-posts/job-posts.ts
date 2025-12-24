import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posts',
  imports: [CommonModule],
  templateUrl: './job-posts.html',
  styleUrl: './job-posts.css',
})
export class JobPosts {
  constructor(private router: Router) {}

  jobs = [
    {
      id: 1,
      title: 'Complete E-commerce Platform',
      company: 'Local Retail Co',
      location: 'Remote',
      budget: '$15k - $25k',
      type: 'Project',
      stack: ['Full Stack', 'Payment Integration', 'Admin Panel'],
      posted: '2 days ago',
      description: 'Need a complete e-commerce solution from scratch - frontend, backend, database, and payment processing.'
    },
    {
      id: 2,
      title: 'Business Management System',
      company: 'Manufacturing SME',
      location: 'Remote',
      budget: '$20k - $35k',
      type: 'Project',
      stack: ['Web App', 'Database Design', 'Reporting'],
      posted: '1 week ago',
      description: 'Custom business management system to handle inventory, orders, and customer data.'
    },
    {
      id: 3,
      title: 'Restaurant Ordering System',
      company: 'Food Chain Startup',
      location: 'Remote',
      budget: '$10k - $18k',
      type: 'Project',
      stack: ['Mobile Responsive', 'Real-time Orders', 'POS Integration'],
      posted: '3 days ago',
      description: 'Complete ordering system with customer app, kitchen dashboard, and management panel.'
    }
  ];

  viewJob(jobId: number) {
    this.router.navigate(['/job', jobId]);
  }

  createJob() {
    this.router.navigate(['/create-job']);
  }
}
