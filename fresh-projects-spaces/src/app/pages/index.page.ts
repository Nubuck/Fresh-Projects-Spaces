import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>House Showcase</h1>
      <!-- Components for house info, floorplan, and room details will go here -->
    </div>
  `,
  styles: [
    `
      /* Add any specific styles for the index page here */
    `,
  ],
})
export default class IndexPage {}