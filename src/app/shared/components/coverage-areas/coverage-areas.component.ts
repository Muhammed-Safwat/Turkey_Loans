import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coverage-areas',
  imports: [CommonModule],
  templateUrl: './coverage-areas.component.html',
  styleUrl: './coverage-areas.component.scss'
})
export class CoverageAreasComponent {
  @Input() areas: any[] = [];
  @Input() title: string = '';
}
