import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { HouseInfoComponent } from '../../components/house-info/house-info.component';
import { FloorplanComponent } from '../../components/floorplan/floorplan.component';
import { RoomDetailsComponent } from '../../components/room-details/room-details.component';
import { Property } from '../../models/property.model'

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [
    CommonModule,
    HouseInfoComponent,
    FloorplanComponent,
    RoomDetailsComponent,
  ],
  template: `
    <div *ngIf="property$ | async as property">
      <app-house-info [house]="property.house"></app-house-info>

      <h2>Floor Plan</h2>
      <app-floorplan
        [floorplanImageUrl]="property.house.floorplanThumbnail"
        (roomSelected)="onRoomSelected($event)"
      ></app-floorplan>

      <app-room-details
        *ngIf="selectedRoom"
        [room]="selectedRoom"
      ></app-room-details>
    </div>
  `,
  styles: [
    `
      /* Add any specific styles for the property detail page here */
    `,
  ],
})
export default class PropertyDetailPage implements OnInit {
  property$: Observable<Property | undefined> | undefined;
  selectedRoom: any | null = null; // Replace with actual Room model

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.property$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const propertyId = params.get('id');
        if (propertyId) {
          // Assuming you have an API route for fetching a single property by ID
          return this.http.get<Property>(`/api/v1/properties/${propertyId}`);
        }
        return [undefined];
      }),
      tap((property) => {
        // Optional: Set a default selected room if needed
        if (property && property.rooms.length > 0) {
          this.selectedRoom = property.rooms[0];
        }
      })
    );
  }

  onRoomSelected(roomId: string): void {
    this.property$?.subscribe((property) => {
      this.selectedRoom = property?.rooms.find((room) => room.id === roomId) || null;
    });
  }
}