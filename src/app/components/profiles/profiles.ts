import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  imports: [CommonModule, FormsModule],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css',
})
export class Profiles {
  constructor(private router: Router) {}

  filters = {
    search: '',
    experience: '',
    technology: '',
    availability: ''
  };

  developers = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'Full Stack Developer',
      stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      experience: '5+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      specialty: 'End-to-end web applications'
    },
    {
      id: 2,
      name: 'Sarah Kim',
      role: 'Full Stack Developer',
      stack: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      experience: '4+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specialty: 'Complete business solutions'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Full Stack Developer',
      stack: ['Angular', 'Java', 'MySQL', 'GCP'],
      experience: '6+ years',
      availability: 'Available',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specialty: 'Enterprise web platforms'
    }
  ];

  get filteredDevelopers() {
    return this.developers.filter(dev => {
      const matchesSearch = !this.filters.search || 
        dev.name.toLowerCase().includes(this.filters.search.toLowerCase()) ||
        dev.stack.some(tech => tech.toLowerCase().includes(this.filters.search.toLowerCase()));
      
      const matchesExperience = !this.filters.experience || dev.experience === this.filters.experience;
      const matchesTechnology = !this.filters.technology || dev.stack.includes(this.filters.technology);
      const matchesAvailability = !this.filters.availability || dev.availability === this.filters.availability;
      
      return matchesSearch && matchesExperience && matchesTechnology && matchesAvailability;
    });
  }

  clearFilters() {
    this.filters = {
      search: '',
      experience: '',
      technology: '',
      availability: ''
    };
  }

  viewProfile(devId: number) {
    this.router.navigate(['/developer', devId]);
  }
}
