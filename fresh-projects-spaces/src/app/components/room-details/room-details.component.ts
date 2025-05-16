import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room.model';


@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-details.component.html',
})
export class RoomDetailsComponent {
  @Input() room: Room | null = null;
}