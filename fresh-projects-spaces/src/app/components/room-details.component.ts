import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2>Room Details Placeholder</h2>
      <p>This component will display the details for a selected room.</p>
    </section>
  `,
  styles: []
})
export class RoomDetailsComponent {

}