import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('../pages/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'services/:id',
    loadComponent: () => import('./service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  },
  {
    path: 'terms-conditions',
    loadComponent: () => import('./terms-conditions/terms-conditions.component').then(m => m.TermsConditionsComponent)
  },
  {
    path: 'error',
    loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent)
  }
];
