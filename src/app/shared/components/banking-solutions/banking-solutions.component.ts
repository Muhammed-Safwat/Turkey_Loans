import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banking-solutions',
  imports: [CommonModule, RouterModule],
  templateUrl: './banking-solutions.component.html',
  styleUrl: './banking-solutions.component.scss'
})
export class BankingSolutionsComponent {
  @Input() services: any[] = [];
}
