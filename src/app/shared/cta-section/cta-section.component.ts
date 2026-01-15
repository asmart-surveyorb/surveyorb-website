import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
  @Input() title = 'Ready to transform your feedback?';
  @Input() description = 'Join thousands of organizations using Survey Orb to collect insights and drive growth. Start free, upgrade when you\'re ready.';
  @Input() primaryButtonText = 'Get Started Free';
  @Input() secondaryButtonText = 'Learn More';
}
