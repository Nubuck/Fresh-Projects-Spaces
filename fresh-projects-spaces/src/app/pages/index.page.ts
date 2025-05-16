import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

interface Property {
  id: string;
  house: {
    title: string;
    description: string;
    price: string;
    address: string;
    thumbnail: string;
  };
  rooms: any[]; // We will refine this later if needed
}

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NgForOf, RouterLink],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Property Listings</h1>
      <div *ngIf="properties">
        <div *ngFor="let property of properties" class="border border-gray-200 p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white">
          <a [routerLink]="['/properties', property.id]" class="block">
            <img [src]="property.house.thumbnail" alt="{{ property.house.title }}" class="w-full h-48 object-cover rounded-md mb-4" loading="lazy">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ property.house.title }}</h2>
            <p class="text-gray-600 mb-2">{{ property.house.address }}</p>
            <p class="text-lg font-bold">{{ property.house.price }}</p>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Add any specific styles for the index page here */
    `,
  ],
})
export default class IndexPage implements OnInit {
  properties: Property[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Property[]>('/api/v1/properties').subscribe(data => {
      this.properties = data;
    });
  }
}