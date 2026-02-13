import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Required for the HTML to recognize routerLink
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {}
