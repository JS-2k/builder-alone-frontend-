import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  services = [
    'Full-stack web development',
    'Automation engineer (n8n / Zapier)',
    'AI integration services (chatbots, AI tools)',
    'SaaS / micro-product builder',
  ];

  currentService = this.services[0];
  private currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startAnimation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.services.length;
      this.currentService = this.services[this.currentIndex];
    }, 3000);
  }

  featuredProfiles = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Full Stack Developer',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      experience: '5+ years',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Sarah Kim',
      role: 'Full Stack Developer', 
      stack: ['Vue.js', 'Python', 'MongoDB'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      experience: '4+ years',
      availability: 'Available'
    }
  ];

  allProfiles = [
    ...this.featuredProfiles,
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Full Stack Developer',
      stack: ['Angular', 'Java', 'MySQL'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      experience: '6+ years',
      availability: 'Available'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Frontend Developer',
      stack: ['React', 'TypeScript', 'Tailwind'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      experience: '3+ years',
      availability: 'Available'
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Backend Developer',
      stack: ['Python', 'Django', 'PostgreSQL'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      experience: '7+ years',
      availability: 'Busy'
    }
  ];

  upcomingProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern online store with payment integration',
      budget: '$5,000 - $10,000',
      deadline: '6 weeks',
      skills: 'React, Node.js'
    },
    {
      id: 2,
      title: 'CRM Dashboard',
      description: 'Customer management system with analytics',
      budget: '$3,000 - $7,000',
      deadline: '4 weeks',
      skills: 'Vue.js, Python'
    }
  ];

  allProjects = [
    ...this.upcomingProjects,
    {
      id: 3,
      title: 'Mobile App Backend',
      description: 'REST API for mobile application with user authentication',
      budget: '$4,000 - $8,000',
      deadline: '5 weeks',
      skills: 'Node.js, MongoDB'
    },
    {
      id: 4,
      title: 'Data Analytics Tool',
      description: 'Business intelligence dashboard with real-time reporting',
      budget: '$6,000 - $12,000',
      deadline: '8 weeks',
      skills: 'Python, React'
    },
    {
      id: 5,
      title: 'Booking System',
      description: 'Online reservation platform for restaurants',
      budget: '$2,500 - $5,000',
      deadline: '3 weeks',
      skills: 'PHP, MySQL'
    }
  ];

  postProject() {
    this.router.navigate(['/create-jobpost']);
  }

  viewAllProfiles() {
    this.router.navigate(['/profiles']);
  }

  launchProfile() {
    this.router.navigate(['/create-profile']);
  }
}
