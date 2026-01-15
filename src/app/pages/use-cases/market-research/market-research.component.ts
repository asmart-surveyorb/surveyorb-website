import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { CtaSectionComponent } from '../../../shared/cta-section/cta-section.component';

@Component({
  selector: 'app-market-research',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CtaSectionComponent],
  templateUrl: './market-research.component.html',
  styleUrl: './market-research.component.scss'
})
export class MarketResearchComponent {}
