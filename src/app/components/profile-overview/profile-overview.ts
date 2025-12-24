import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-overview',
  imports: [CommonModule],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
})
export class ProfileOverview implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  developer = {
    id: 1,
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    experience: '5+ years',
    availability: 'Available',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    specialty: 'End-to-end web applications',
    bio: 'Experienced full-stack developer specializing in complete business solutions for SMEs. I handle everything from frontend to backend, database design, and deployment.',
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Complete online store with payment integration',
        tech: ['React', 'Node.js', 'Stripe'],
        link: 'https://example.com'
      },
      {
        title: 'Business Management System',
        description: 'Inventory and order management for manufacturing',
        tech: ['Vue.js', 'Python', 'PostgreSQL'],
        link: 'https://example.com'
      }
    ],
    linkedin: 'https://linkedin.com/in/alexchen',
    github: 'https://github.com/alexchen',
    website: 'https://alexchen.dev'
  };

  ngOnInit() {
    const devId = this.route.snapshot.paramMap.get('id');
    // In real app, fetch developer by ID
  }

  goBack() {
    this.location.back();
  }
}
