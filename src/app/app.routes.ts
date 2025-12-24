import { Routes } from '@angular/router';
import { Profiles } from './components/profiles/profiles';
import { JobPosts } from './components/job-posts/job-posts';
import { JobpostOverview } from './components/jobpost-overview/jobpost-overview';
import { Pricing } from './components/pricing/pricing';
import { ProfileOverview } from './components/profile-overview/profile-overview';
import { CreateJobpost } from './components/create-jobpost/create-jobpost';
import { Login } from './Auth/login/login';
import { Signup } from './Auth/signup/signup';

export const routes: Routes = [
  { path: '', component: Profiles, title: 'Full Stack Developers - Builder Alone' },
  { path: 'jobs', component: JobPosts, title: 'Projects - Builder Alone' },
  { path: 'job/:id', component: JobpostOverview, title: 'Project Details - Builder Alone' },
  { path: 'pricing', component: Pricing, title: 'Pricing - Builder Alone' },
  { path: 'developer/:id', component: ProfileOverview, title: 'Developer Profile - Builder Alone' },
  { path: 'create-job', component: CreateJobpost, title: 'Post a Job - Builder Alone' },
  { path: 'login', component: Login, title: 'Sign In - Builder Alone' },
  { path: 'signup', component: Signup, title: 'Sign Up - Builder Alone' }
];
