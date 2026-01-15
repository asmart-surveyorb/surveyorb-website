import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss'
})
export class IntegrationsComponent {}
