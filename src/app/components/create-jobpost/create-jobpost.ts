import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-jobpost',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-jobpost.html',
  styleUrl: './create-jobpost.css',
})
export class CreateJobpost {
  constructor(private location: Location) {}

  jobData = {
    title: '',
    company: '',
    logo: null as File | null,
    budget: '',
    currency: 'USD',
    location: 'Remote',
    type: 'Project',
    description: '',
    requirements: '',
    stack: ['Any'] as string[]
  };

  currencyOptions = [
    { label: 'USD ($)', value: 'USD' },
    { label: 'EUR (€)', value: 'EUR' },
    { label: 'GBP (£)', value: 'GBP' },
    { label: 'INR (₹)', value: 'INR' },
    { label: 'CAD (C$)', value: 'CAD' },
    { label: 'AUD (A$)', value: 'AUD' }
  ];

  locationOptions = [
    { label: 'Remote', value: 'Remote' },
    { label: 'On-site', value: 'On-site' },
    { label: 'Hybrid', value: 'Hybrid' }
  ];

  typeOptions = [
    { label: 'Project', value: 'Project' },
    { label: 'Contract', value: 'Contract' },
    { label: 'Part-time', value: 'Part-time' }
  ];

  techOptions = [
    'Any',
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java',
    'PostgreSQL', 'MongoDB', 'MySQL', 'AWS', 'Docker', 'TypeScript'
  ];

  goBack() {
    this.location.back();
  }

  onSubmit() {
    console.log('Job posted:', this.jobData);
    // Handle form submission
  }

  toggleTech(tech: string) {
    const index = this.jobData.stack.indexOf(tech);
    if (index > -1) {
      this.jobData.stack.splice(index, 1);
    } else {
      this.jobData.stack.push(tech);
    }
  }

  isTechSelected(tech: string): boolean {
    return this.jobData.stack.includes(tech);
  }

  onLogoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.jobData.logo = file;
    }
  }
}
