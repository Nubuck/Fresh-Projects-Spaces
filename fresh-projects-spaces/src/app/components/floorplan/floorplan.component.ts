import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floorplan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floorplan.component.html',
})
export class FloorplanComponent {
  @Input() floorplanImageUrl: string | undefined;
  @Output() roomSelected = new EventEmitter<string>();

  // Method to handle room selection (will be called by the template)
  onRoomClick(roomId: string): void {
    this.roomSelected.emit(roomId);
  }
}