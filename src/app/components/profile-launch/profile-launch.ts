import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-launch',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-launch.html',
  styleUrl: './profile-launch.css',
})
export class ProfileLaunch {
  constructor(private router: Router) {}

  profile = {
    name: '',
    email: '',
    title: '',
    experience: '',
    hourlyRate: '',
    location: '',
    bio: '',
    skills: '',
    portfolio: '',
    github: '',
    linkedin: '',
    profileImage: null as File | null,
    projects: [] as Array<{
      title: string;
      description: string;
      skills: string;
      link: string;
    }>
  };

  imagePreview: string | null = null;

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profile.profileImage = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.profile.profileImage = null;
    this.imagePreview = null;
  }

  addProject() {
    this.profile.projects.push({
      title: '',
      description: '',
      skills: '',
      link: ''
    });
  }

  removeProject(index: number) {
    this.profile.projects.splice(index, 1);
  }

  onSubmit() {
    console.log('Profile data:', this.profile);
    // Handle form submission
    alert('Profile launched successfully!');
    this.router.navigate(['/profiles']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
