import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../shared/core/services/seo.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // The server always returns 200 (SPA fallback), so any mistyped/unknown
    // URL lands here. Keep these soft-404s out of Google's index.
    this.seoService.updatePageSEO({
      title: 'الصفحة غير موجودة | أبو تركي لتسديد القروض',
      description: 'الصفحة التي تبحث عنها غير موجودة، يمكنك العودة إلى الصفحة الرئيسية لتصفح خدماتنا.'
    });
    this.seoService.setNoIndex(true);
  }
}
