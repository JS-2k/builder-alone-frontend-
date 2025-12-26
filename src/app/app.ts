import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TopNavbar } from "./components/Menubars/top-navbar/top-navbar";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = !['/login', '/signup'].includes(event.url);
    });
  }
}
