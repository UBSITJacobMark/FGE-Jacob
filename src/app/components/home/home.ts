import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Required for the links in the card footer
  templateUrl: './home.html'
})
export class Home {
  // Application Info
  appTitle: string = 'FGE-Jacob Portal';
  appDescription: string = 'Comprehensive user management system built with Angular.';
  welcomeMessage: string = 'Welcome back, User!';

  // Primitives
  developerName: string = 'Jacob';
  systemVersion: number = 1.2;
  isRegOpen: boolean = true;
}
