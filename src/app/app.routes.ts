import { Routes } from '@angular/router';
import { Profiles } from './components/profiles/profiles';
import { JobPosts } from './components/job-posts/job-posts';
import { JobpostOverview } from './components/jobpost-overview/jobpost-overview';
import { Pricing } from './components/pricing/pricing';
import { ProfileOverview } from './components/profile-overview/profile-overview';

export const routes: Routes = [
  { path: '', component: Profiles, title: 'Full Stack Developers - Builder Alone' },
  { path: 'jobs', component: JobPosts, title: 'SME Projects - Builder Alone' },
  { path: 'job/:id', component: JobpostOverview, title: 'Project Details - Builder Alone' },
  { path: 'pricing', component: Pricing, title: 'Pricing - Builder Alone' },
  { path: 'developer/:id', component: ProfileOverview, title: 'Developer Profile - Builder Alone' }
];
