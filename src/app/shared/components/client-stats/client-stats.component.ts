import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-stats',
  imports: [CommonModule],
  templateUrl: './client-stats.component.html',
  styleUrl: './client-stats.component.scss'
})
export class ClientStatsComponent {
  @Input() stats: any = {};
  @Input() features: string[] = [];
}
