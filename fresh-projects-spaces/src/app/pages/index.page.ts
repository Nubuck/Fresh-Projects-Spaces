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
        <div *ngFor="let property of properties" class="border p-4 mb-4 rounded-md">
          <a [routerLink]="['/properties', property.id]">
            <img [src]="property.house.thumbnail" alt="{{ property.house.title }}" class="w-full h-48 object-cover mb-4">
            <h2 class="text-xl font-semibold">{{ property.house.title }}</h2>
            <p>{{ property.house.address }}</p>
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