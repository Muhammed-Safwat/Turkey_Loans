import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../shared/components/layout/header/header.component";

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString('ar-SA');
  }

}
