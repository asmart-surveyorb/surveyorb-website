import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  protected readonly openFaq = signal<number | null>(null);
  
  faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the remaining balance will be credited to your account.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all paid plans. No credit card required to start. You\'ll have full access to all features during the trial period.'
    },
    {
      question: 'What happens when I reach my response limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan at any time to increase your limit, or wait until the next billing cycle when your responses reset.'
    },
    {
      question: 'Do you offer discounts for nonprofits or education?',
      answer: 'Yes! We offer special pricing for registered nonprofits, educational institutions, and students. Contact our sales team for more information about our discount programs.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'What\'s included in the Enterprise plan?',
      answer: 'Enterprise plans include unlimited responses, advanced security features, dedicated account management, custom integrations, SLA guarantees, and priority support. Contact us for a custom quote.'
    },
    {
      question: 'How does the AI credit system work?',
      answer: 'AI credits are used for AI-powered features like survey generation, question optimization, and sentiment analysis. Each plan includes a monthly allocation of credits that reset at the start of each billing cycle.'
    }
  ];
  
  toggleFaq(index: number): void {
    this.openFaq.set(this.openFaq() === index ? null : index);
  }
}
