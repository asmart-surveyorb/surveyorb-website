import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal/privacy/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'features',
    loadComponent: () => import('./pages/product/features/features.component').then(m => m.FeaturesComponent)
  },
  {
    path: 'integrations',
    loadComponent: () => import('./pages/product/integrations/integrations.component').then(m => m.IntegrationsComponent)
  },
  {
    path: 'templates',
    loadComponent: () => import('./pages/product/templates/templates.component').then(m => m.TemplatesComponent)
  },
  {
    path: 'whats-new',
    loadComponent: () => import('./pages/product/whats-new/whats-new.component').then(m => m.WhatsNewComponent)
  },
  {
    path: 'customer-experience',
    loadComponent: () => import('./pages/use-cases/customer-experience/customer-experience.component').then(m => m.CustomerExperienceComponent)
  },
  {
    path: 'employee-experience',
    loadComponent: () => import('./pages/use-cases/employee-experience/employee-experience.component').then(m => m.EmployeeExperienceComponent)
  },
  {
    path: 'market-research',
    loadComponent: () => import('./pages/use-cases/market-research/market-research.component').then(m => m.MarketResearchComponent)
  },
  {
    path: 'product-feedback',
    loadComponent: () => import('./pages/use-cases/product-feedback/product-feedback.component').then(m => m.ProductFeedbackComponent)
  },
  {
    path: 'event-surveys',
    loadComponent: () => import('./pages/use-cases/event-surveys/event-surveys.component').then(m => m.EventSurveysComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/company/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/company/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/company/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'press',
    loadComponent: () => import('./pages/company/press/press.component').then(m => m.PressComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
