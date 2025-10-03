import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitcherComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit { 

  ngOnInit() {
   
  }
}
