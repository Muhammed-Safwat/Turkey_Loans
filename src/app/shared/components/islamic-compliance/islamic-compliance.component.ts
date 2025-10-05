import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-islamic-compliance',
  imports: [CommonModule],
  templateUrl: './islamic-compliance.component.html',
  styleUrl: './islamic-compliance.component.scss'
})
export class IslamicComplianceComponent {
  @Input() compliance: any = {};
}
