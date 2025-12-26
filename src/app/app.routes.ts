import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profiles } from './components/profiles/profiles';
import { JobPosts } from './components/job-posts/job-posts';
import { JobpostOverview } from './components/jobpost-overview/jobpost-overview';
import { Pricing } from './components/pricing/pricing';
import { ProfileOverview } from './components/profile-overview/profile-overview';
import { CreateJobpost } from './components/create-jobpost/create-jobpost';
import { ProfileLaunch } from './components/profile-launch/profile-launch';
import { Message } from './components/message/message';
import { Login } from './Auth/login/login';
import { Signup } from './Auth/signup/signup';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home - Builder Alone' },
  { path: 'profiles', component: Profiles, title: 'Full Stack Developers - Builder Alone' },
  { path: 'jobs', component: JobPosts, title: 'Projects - Builder Alone' },
  { path: 'job/:id', component: JobpostOverview, title: 'Project Details - Builder Alone' },
  { path: 'pricing', component: Pricing, title: 'Pricing - Builder Alone' },
  { path: 'developer/:id', component: ProfileOverview, title: 'Developer Profile - Builder Alone' },
  { path: 'create-jobpost', component: CreateJobpost, title: 'Post a Job - Builder Alone' },
  { path: 'create-profile', component: ProfileLaunch, title: 'Launch Your Profile - Builder Alone' },
  { path: 'messages', component: Message, title: 'Messages - Builder Alone' },
  { path: 'login', component: Login, title: 'Sign In - Builder Alone' },
  { path: 'signup', component: Signup, title: 'Sign Up - Builder Alone' }
];
