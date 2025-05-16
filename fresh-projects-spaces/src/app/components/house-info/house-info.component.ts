import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-info.component.html',
})
export class HouseInfoComponent {
  @Input() house!: House;
}